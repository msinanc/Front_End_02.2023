import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductTable } from "../mui/ProductTable";

const urlList = './json/products.json';


export const FetchList = ({data}) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
        fetch(urlList)
            .then( data => data.json())
            .then ( products => setProducts(products) )
    },[products])
    
    return (
        <div>
            <h4>Git-Getir - Dizelge</h4>
            <table border="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                            <td>{product.id} <Link to={'/product/' + product.id}>Ürüne Git</Link> </td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <hr/>
            <ProductTable data={products} />
        </div>
    )
}