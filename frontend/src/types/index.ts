export enum stepType {
    CreateFile,
    CreateFolder,
    EditFile,
    DeleteFile,
    RunScript
}

export interface step { 
    id : number,
    title : string,
    description : string,
    type : stepType,
    status : "pending"| "progressing" | "completed",
    code? : string,
    path? : string
}