import MommyComponent from "./MommyComponent";
import React, {createContext} from "react"


export const PriceContext = createContext(100); // Bu değere her yerden erişmek istiyoruz.

export default function GrandmaComponent(){
    const quantity = 3;
    const price = 300;
    return (

        <PriceContext.Provider value={price} >
            <div>
                <h1>Nine</h1>
                Nine Nicelik : {quantity} Eder : {price}
                <MommyComponent quantity={quantity}/>
            </div>
        </PriceContext.Provider>
    )
}