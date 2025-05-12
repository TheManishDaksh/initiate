import { useEffect, useState } from "react"
import { fileItem, Step, StepType } from "../types"

export default function Builder(){

    const [files, setFiles] = useState<fileItem[]>([]);
    const [ steps, setSteps] = useState<Step[]>([]);

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
                    parsedPath = parsedPath.slice();
                    
                }
            }
        })    
    })
    return (
        <div>
            Builder
        </div>
    )
}