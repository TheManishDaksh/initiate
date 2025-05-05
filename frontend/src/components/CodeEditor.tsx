import { Editor } from "@monaco-editor/react";
import { CodeEditorProps } from "../types";

export default function CodeEditor({file}:CodeEditorProps){
    if(!file){
        return (
            <div>
                <h3> Select a File to Explore its content </h3>
            </div>
        )
    }
    return(
        <div>
            <Editor
                defaultLanguage="typescript"
                value={file.content || "No Content Found"}
                height={"100%"}
                theme="vs-dark"
                options={{
                    readOnly : true,
                    minimap : {enabled : false},
                    fontSize : 14,
                    wordWrap : "on",
                    scrollBeyondLastLine : true
                }}
            />
        </div>
    )
}