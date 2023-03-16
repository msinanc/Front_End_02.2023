import { useContext } from "react"
import { PriceContext } from "./GrandmaComponent"

export default function DaughterComponent({quantity}){
    const price = useContext(PriceContext);
    return (
        <div>
            <h5>Kız</h5>
            Kız Nicelik : {quantity}<br/>
            Kız Eder : {price}<br/>
            <PriceContext.Consumer>
                {value => <strong> Değer Eder : {value}</strong> }
            </PriceContext.Consumer>
        </div>
    )
}