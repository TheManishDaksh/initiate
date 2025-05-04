import { useState } from "react"
import { fileItem } from "../types"
import { ChevronDown, ChevronRight, File, FolderTree } from "lucide-react";

interface FileNodeProps {
    item : fileItem,
    depth : number,
    onFileClick : (file : fileItem)=>void
}

interface FileExplorerProps{
    files : fileItem[];
    onFileSelect : (file : fileItem)=>void
}



function FileNode({item, depth, onFileClick} : FileNodeProps ){
    const [isExtended , setIsExtended] = useState(false);
    
    const handleFileClick=()=>{
        if(item.type === 'folder'){
            setIsExtended(!isExtended)
        }else{
            onFileClick(item)
        }
    }
    return (
        <div>
            <div onClick={handleFileClick}>
                {item.type === 'folder'&& (
                    <span>
                        {isExtended ? (
                             <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                        )}
                    </span>
                )}
                 {item.type === 'folder' ? (
          <FolderTree className="w-4 h-4 text-blue-400" />
        ) : (
          <File className="w-4 h-4 text-gray-400" />
        )}
        <span className="text-gray-200">{item.name}</span>
            </div>
            {item.type === 'folder' && isExtended && item.children && (
        <div>
          {item.children.map((child, index) => (
            <FileNode
              key={`${child.path}-${index}`}
              item={child}
              depth={depth+1}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      )}
        </div>
    )
}

export function FileExplorer({files, onFileSelect} : FileExplorerProps){
    return (
        <div>
           <h2>File Explorer</h2>
           <div>
            {files.map((file)=>{
             return <FileNode 
                item={file}
                depth={0}
                onFileClick={onFileSelect}
                />
            })}
           </div>
        </div>
    )
}