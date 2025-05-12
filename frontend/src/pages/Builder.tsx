import { useEffect, useState } from "react"
import { fileItem, Step, StepType } from "../types"
import useWebContainer from "../hooks/useWebContainer";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useLocation } from "react-router-dom";
import xmlParser from "../xmlParser";
import { CodeEditor, CurrentTab, FileExplorer, FileViewer, Loader, Preview, Stepslist } from "../components";

export default function Builder(){

    const [files, setFiles] = useState<fileItem[]>([]);
    const [ steps, setSteps] = useState<Step[]>([]);
    const webContainer = useWebContainer();
    const location = useLocation();
    const {prompt} = location.state as {prompt : string};
    const [templateSet, setTemplateSet] = useState(false);
    const [ loading, setLoading] = useState(false);
    const [llmMessage, setLlmMessage] = useState<{role: "user" | "assistant", content: string;}[]>([]);
    const [ selectedFile, setSelectedFile] = useState<fileItem | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [ userPrompt, setPrompt] = useState("");
    const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');

    useEffect(()=>{
        let originalFiles = [...files];
        let updateHappened = false;
        steps.filter(({status})=> status === "pending").map(step =>{
            updateHappened = true;
            if( step.type === StepType.CreateFile){
                let parsedPath = step.path?.split("/") ?? [];
                let currentFileStructure = [...originalFiles]
                let finalAnswerRef = currentFileStructure;

                let currentFolder = "";
                while(parsedPath.length){
                    currentFolder = `${currentFolder}/${parsedPath[0]}`
                    let currentFolderName = parsedPath[0];
                    parsedPath = parsedPath.slice(1);
                    
                    if(!parsedPath.length){
                        let file = currentFileStructure.find(x => x.path === currentFolder)
                        if(!file){
                            currentFileStructure.push({
                                name : currentFolderName,
                                type : "file",
                                path : currentFolder,
                                content : step.code
                            })
                        }else { 
                            file.content = step.code
                        }
                    }else{
                        // if A FOLDER 
                        let folder = currentFileStructure.find(x=> x.path === currentFolder);
                        if(!folder){
                            currentFileStructure.push({
                                name : currentFolderName,
                                type : "folder",
                                path : currentFolder,
                                children : []
                            })
                        }
                        currentFileStructure = currentFileStructure.find(x=> x.path === currentFolder)!.children!;
                    }
                }
                originalFiles = finalAnswerRef;
            }
        })    
        if(updateHappened){
            setFiles(originalFiles);
            setSteps(status => status.map((s:Step)=>
                {return {
                ...s,
                status : "completed"
            }
        }))
        }
    },[steps, files])

    useEffect(()=>{
        const createMountStructure = (file : fileItem[])=>{
                const mountStructure:Record<string, any> = {};
                const processFile = (file : fileItem, isRootFolder : boolean)=>{
                    if(file.type === "folder"){
                        mountStructure[file.name] = {
                            directory : file.children ? 
                            Object.fromEntries(
                                file.children.map(child => [child.name, processFile(child, false)])
                            ) : {}
                        };
                    }else if( file.type === "file"){
                        if(isRootFolder){
                            mountStructure[file.name]={
                                file : {
                                    contents : file.content || ""
                                }
                            }
                        }else{
                            return { 
                                file : {
                                    contents : file.content || ""
                                }
                            }
                        }                       
                    }
                    return mountStructure[file.name];
                }
                files.forEach(file => processFile(file, true));
                webContainer?.mount(mountStructure);
        }
    },[webContainer, files])

    async function init(){
        const response = await axios.post(`${BACKEND_URL}/template`,{
            prompt : prompt.trim()
        });
        setTemplateSet(true);
        const { prompts, uiPrompts} = response.data;
        setSteps(xmlParser(uiPrompts[0]).map((s:Step)=>{
            return {
                ...s,
                status : "pending"
            }
        }))

        setLoading(true);
        const stepResponse = await axios.post(`${BACKEND_URL}/chat`,{
            message : [...prompts, prompt].map(content =>({
                role : "user",
                content
            }))
        })
        setLoading(false);
        setSteps(s => [...s, ...xmlParser(stepResponse.data.response).map(x=>({
            ...x,
            status : "pending" as "pending"
        }))]);

        setLlmMessage([...prompts, prompt].map(content =>({
            role : "user",
            content
        })))
        setLlmMessage(x=>[...x, {role : "assistant", content : stepResponse.data.response}])
    }
    useEffect(()=>{
        init();
    },[])
     return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-100">Website Builder</h1>
        <p className="text-sm text-gray-400 mt-1">Prompt: {prompt}</p>
      </header>
      
      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-4 gap-6 p-6">
          <div className="col-span-1 space-y-6 overflow-auto">
            <div>
              <div className="max-h-[75vh] overflow-scroll">
                <Stepslist
                  steps={steps}
                  currentStep={currentStep}
                  onStepClick={setCurrentStep}
                />
              </div>
              <div>
                <div className='flex'>
                  <br />
                  {(loading || !templateSet) && <Loader />}
                  {!(loading || !templateSet) && <div className='flex'>
                    <textarea value={userPrompt} onChange={(e) => {
                    setPrompt(e.target.value)
                  }} className='p-2 w-full'></textarea>
                  <button onClick={async () => {
                    const newMessage = {
                      role: "user" as "user",
                      content: userPrompt
                    };

                    setLoading(true);
                    const stepsResponse = await axios.post(`${BACKEND_URL}/chat`, {
                      messages: [...llmMessage, newMessage]
                    });
                    setLoading(false);

                    setLlmMessage(x => [...x, newMessage]);
                    setLlmMessage(x => [...x, {
                      role: "assistant",
                      content: stepsResponse.data.response
                    }]);
                    
                    setSteps(s => [...s, ...xmlParser(stepsResponse.data.response).map(x => ({
                      ...x,
                      status: "pending" as "pending"
                    }))]);

                  }} className='bg-purple-400 px-4'>Send</button>
                  </div>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
              <FileExplorer 
                files={files} 
                onFileSelect={setSelectedFile}
              />
            </div>
          <div className="col-span-2 bg-gray-900 rounded-lg shadow-lg p-4 h-[calc(100vh-8rem)]">
            <CurrentTab activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="h-[calc(100%-4rem)]">
              {activeTab === 'code' ? (
                <CodeEditor file={selectedFile} />
              ) : (
                <Preview webContainer={webContainer!} files={files} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}