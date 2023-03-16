import { useState } from "react";

export default function SituationInside(){
    const [condition, setCondition] = useState(true);
    const getConditional = () => {
        if (condition){
            return <div>Olumlu</div> // Olduğu gibi <div> yerine component(bileşen) koyabilirsin.
        }else{
            return <div>Olumsuz</div>  // Olduğu gibi <div> yerine component((bileşen)) koyabilirsin.
        }
    }

    const conditionChanged= (event) => {
        // setCondition(!condition);
        setCondition(event.target.checked);
    } 

    return (
        <div>
            <h1>İçerisi</h1>
            <input type="checkbox" checked={condition} onChange={conditionChanged} />
            {getConditional()}
        </div>
    )
}