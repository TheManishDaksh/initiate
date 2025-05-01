import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Prompt(){

    const [prompt, setPrompt] =  useState('');
    const navigate = useNavigate();

    const handleFormsubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        navigate("/builder",{state:{prompt}})    
    }
    return (
        <div>
            <div>
                <div>
                    <p>What do you want to build?</p>
                    <p>Prompt, run, edit, and deploy full-stack web app</p>
                </div>
                <div>
                    <form onSubmit={handleFormsubmit}> 
                        <div>
                            <div>
                            <textarea 
                            value={prompt}
                            rows={10}
                            cols={60}
                            onChange={(e)=>setPrompt(e.target.value)}
                        />
                            </div>
                            <div>
                                <button type="submit"
                                >Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Prompt;