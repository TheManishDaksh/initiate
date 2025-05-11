import { Step, StepType } from "./types";

export default function xmlParser(response : string):Step[]{

    const xmlMatch = response.match(/<boltArtifact[^>]*>([\s\S]*?)<\/boltArtifact>/);
    if(!xmlMatch){
        return [];
    }
    const xmlContent = xmlMatch[1];
    const steps : Step[] = [];
    let stepId = 1;

    // artifact title
    const matchTitle = response.match(/title="([^"]*)"/);
    const artifactTitle = matchTitle ? matchTitle[1] : "Project-file"

    // add initial artifact steps
    steps.push({
        id : stepId++,
        title : artifactTitle,
        description : "",
        type : StepType.CreateFolder,
        status : "pending"
    })

     // Regular expression to find boltAction elements
     const actionRegex = /<boltAction\s+type="([^"]*)"(?:\s+filePath="([^"]*)")?>([\s\S]*?)<\/boltAction>/g;

     let match;
     while((match = actionRegex.exec(xmlContent)) !== null){
        const [, type, filePath, content] = match;

        if(type == "file"){
            steps.push({
                id : stepId++,
                title : `create ${filePath || "file"}`,
                description : "",
                type : StepType.CreateFile,
                status : "pending",
                code : content.trim(),
                path : filePath
            })
        }else if(type == "shell"){
            steps.push({
                id : stepId++,
                title : "Run Command",
                description : "",
                type : StepType.RunScript,
                status : "pending",
                code : content.trim()
            })
        }
     }
     return steps;
}