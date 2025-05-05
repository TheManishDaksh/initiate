import { CheckCircle, Circle, Clock } from "lucide-react"
import { step } from "../types"

interface SteplistProps {
    steps : step[],
    currentStep : number,
    onStepClick : (stepId : number)=>void
}

export default function Stepslist({steps, currentStep, onStepClick}:SteplistProps){

    return(
        <div>
            <h2>Build Steps</h2>
            <div>
                {steps.map((step)=>{
                    return (
                        <div key={step.id}
                        className={`bg-slate-400
                            ${ currentStep === step.id ? `bg-fuchsia-50`: `bg-slate-400`}
                        `}
                        onClick={()=>onStepClick(step.id)}
                        >
                           <div>
                            {step.status === "pending" ? 
                            (<Circle className="w-5 h-5 text-gray-500"/>):
                             step.status === "progressing" ? 
                             (<Clock className="w-5 h-5 text-blue-500"/>) :
                             (<CheckCircle className="w-5 h-5 text-green-500"/>)
                            }
                           <h3>{step.title}</h3>
                           </div>
                           <h4>{step.description}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}