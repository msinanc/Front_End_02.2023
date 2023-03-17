import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FetchGetArray = () => {
    // const id = 301;
    const { id } = useParams();

    const urlGet = '/json/product' + id + '.json';

    const initialProduct = [];
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
    
    useEffect(() =>{
        fetch(urlGet)
            .then( data => data.json())
            .then ( product => setProduct(product) )
    },[urlGet])
    
    return (
        <div>
            <h4>Git-Getir - Edin</h4>

            <form onSubmit={null} >
                Öz: {product.id} <br/>
                Ad: <input type="text" name="name"  
                value={product.name || ''} onChange={nameChanged}/><br/>
                Eder: <input type="number" name="price" 
                value={product.price || ''} onChange={priceChanged}/><br/>
                <input type="submit" name="Sakla" /><br/>

            </form>

        </div>
    )
}