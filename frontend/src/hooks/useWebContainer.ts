import { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";

export default function useWebContainer(){
    const [ container, setContainer] = useState<WebContainer>();

   useEffect(()=>{
    (async()=>{
        const containerInstance = await WebContainer.boot();
        setContainer(containerInstance);
    })
   },[])
    return container;
}