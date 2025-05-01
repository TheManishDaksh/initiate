import { useNavigate } from "react-router-dom";

function Landing(){

    const navigate = useNavigate();
    return (
        <div> 
            <div>
                Home
            </div>
            <div>
                <button onClick={()=>navigate("/prompt")}
                >Get started</button>
            </div>
        </div>
    )
}

export default Landing;