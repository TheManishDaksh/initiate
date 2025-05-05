import { X } from "lucide-react"
import { FileViewerProps } from "../types"

export default function FileViewer({file, onClose}:FileViewerProps){
    if(!file) return null;
    
    return(
        <div>
            <div>
                <h3>{file?.path}</h3>
                <button onClick={onClose}>
                    <X className="w-5 h-5"/>
                </button>
                <div>
                    <pre>
                        {file?.content || "No Content available"}
                    </pre>
                </div>
            </div>
        </div>
    )
}