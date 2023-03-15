import { useState } from "react"

export const ObjectComponent = () => {

    const initialProduct = { id:0, name:'Adsız', price:100.0 }
    const [product, setProduct] = useState(initialProduct);

    const nameChanged = (event) => {
        event.preventDefault();
        setProduct ({
            id: product.id, 
            name: event.target.value, 
            price: product.price
        });
    }
    
    const priceChanged = (event) => {
        event.preventDefault();
        setProduct ({
            ...product,
            price: event.target.value
        });
    }

    return (
        <>
            <h1>Nesne Biçimi</h1>
            {product.id} {product.name} {product.price} <br/>
            <hr/>
            <form>
                Öz: {product.id} <br/>
                Ad: <input type="text" name="name"  
                value={product.name || ''} onChange={nameChanged}/><br/>
                Eder: <input type="number" name="price" 
                value={product.price || ''} onChange={priceChanged}/><br/>
                <input type="submit" name="Sakla"/><br/>

            </form>
        </>
    )
}