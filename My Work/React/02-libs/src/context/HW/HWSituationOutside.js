import { useState } from "react";
import HWSituationInside1 from "./HWSituationInside1";
import HWSituationInside2 from "./HWSituationInside2";

export default function HWSituationOutside({click}){
    const [condition, setCondition] = useState(true);
    const getConditional = () => {
        if (condition){
            return <HWSituationInside1 click={condition}/>
        }else{
            return <HWSituationInside2 click={condition}/>
        }
    }
    

    const conditionChanged= () => {
        setCondition(!condition);
        // setCondition(event.target.checked);
    }

    return (
        <div>
            <h1>Dışarısı</h1>
            <button onClick={conditionChanged} >Değiştir</button>
            {condition 
            ? 
            ( 
                <HWSituationInside1 onClick={setCondition} />
            ) 
            : 
            (
                <HWSituationInside2 onClick={setCondition} />
            )}
            
        </div>
    )
}