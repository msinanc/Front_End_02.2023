import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const  HolderComponent = () => {
    const initialState = 1;

    const quantity = useSelector( state => state.quantity )
    const dispatch = useDispatch();
    const [delta, setDelta] = useState(initialState);

    const decrementQuantity = () => {
        dispatch({type:'quantity/decrement'})
    }

    const addQuantity = (delta) => {
        dispatch({
            type:'quantity/add', 
            delta:delta
    })
    }
    
    const subtractQuantity = (delta) => {
        dispatch({
            type:'quantity/add', 
            delta:-delta
    })
    }



    return (
        <>
            Nicelik : {quantity}<br/><br/>
            <button onClick={() => dispatch({type:'quantity/increment'})} > Artır </button><br/>
            <button onClick={decrementQuantity} > Eksilt </button><br/>
            <input type="number" value={delta || ''} onChange={ e => setDelta(e.target.value)}/>
            <button onClick={() => addQuantity(delta)} > Ekle </button>
            <button onClick={() => subtractQuantity(delta)} > Çıkar </button><br/>

        </>
    )
}

export default HolderComponent;
