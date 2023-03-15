import { useState } from "react"

export const ObjectComponent = () => {

    const initialProduct = { id:0, name:'Adsız', price:100.0 }
    const [product, setProduct] = useState(initialProduct);
    const [errors, setErrors] = useState({});

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

    const isValid = () => {
        let valid = true;
        let errors = {};
        if (product.name.length < 3){
            valid = false;
            errors['name'] = 'Ad en az 3 olmalı';
        }
        if (product.price < 0){
            valid = false;
            errors['price'] = 'Fiyat eksi girilemez';
        }
        setErrors(errors);
        return valid;
    }

    const save = (e) => {
        e.preventDefault();
        if(!isValid()){
            alert('Geçersiz');
            return;
        }
        alert(product.id + product.name + product.price);
    }
    return (
        <>
            <h1>Nesne Biçimi</h1>
            {product.id} {product.name} {product.price} <br/>
            <hr/>
            <ul>
                {Object.keys(errors).map(key => 
                    <li key={errors}>{errors[key] ? errors[key]:''}</li>
                )}
            </ul>
            
            <form onSubmit={save} >
                Öz: {product.id} <br/>
                Ad: <input type="text" name="name"  
                value={product.name || ''} onChange={nameChanged}/><br/>
                Eder: <input type="number" name="price" 
                value={product.price || ''} onChange={priceChanged}/><br/>
                <input type="submit" name="Sakla" /><br/>

            </form>
        </>
    )
}