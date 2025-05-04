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

export interface fileItem {
    name : string,
    type : 'file' | 'folder',
    path : string,
    content? : string,
    children? : fileItem[]
}