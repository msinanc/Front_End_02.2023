import { useState } from "react";

export default function StateComponent(){

    const [quantity, setQuantity] = useState(10);
    const deal = (input) => {
        setQuantity(input);
    }

    return (
        <div>
            <h1>Durum</h1>
            <h2>Nicelik : {quantity}</h2><br/>
            <button onClick={() => deal(20)}>Değiştir</button>
        </div>
        
    )

}