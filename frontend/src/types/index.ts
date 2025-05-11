export enum StepType {
    CreateFile,
    CreateFolder,
    EditFile,
    DeleteFile,
    RunScript
}

export interface Step { 
    id : number,
    title : string,
    description : string,
    type : StepType,
    status : "pending"| "progressing" | "completed",
    code? : string,
    path? : string
}

export interface Project {
    prompt : string,
    steps : Step[]
}

export interface fileItem {
    name : string,
    type : 'file' | 'folder',
    path : string,
    content? : string,
    children? : fileItem[]
}

export interface FileViewerProps {
    file : fileItem | null,
    onClose : ()=>void
}

export interface CodeEditorProps {
    file : fileItem | null
}