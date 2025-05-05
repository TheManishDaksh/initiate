import { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";
import { Loader } from "./index";

interface PreviewProps {
    files : any[] | null,
    webContainer : WebContainer
}

export default function Preview({files, webContainer} : PreviewProps){
    const [url, setUrl] = useState("");

    async function main(){
        const installProcess = await webContainer.spawn("npm",["install"]);

        installProcess.output.pipeTo(new WritableStream({
            write(data){
            console.log(data)
            }
        }))
        await webContainer.spawn("npm",["run", "dev"]);
        webContainer.on('server-ready',(port, url)=>{
            console.log(port);
            console.log(url);
            setUrl(url);
        })
    }

    useEffect(()=>{
        main();
    },[])

    return(
        <div>
            {!url ? 
            ( <Loader/>):
            ( <iframe width={"100%"} height={"100%"} src={url} />)
            }
        </div>
    )
}