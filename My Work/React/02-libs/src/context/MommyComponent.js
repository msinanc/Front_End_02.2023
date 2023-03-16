import DaughterComponent from "./DaughterComponent";

export default function MommyComponent({quantity}){

    return (
        <div>
            <h3>Anne</h3>
            Anne Nicelik : {quantity}
            <DaughterComponent quantity={quantity}/>
        </div>
    )
}