import { useLocation } from "react-router-dom";


function Builder(){
    
    const location = useLocation()
    const prompt = location.state
    
    return ( 
        <div>
            Builder
        </div>
    )
}
export default Builder;