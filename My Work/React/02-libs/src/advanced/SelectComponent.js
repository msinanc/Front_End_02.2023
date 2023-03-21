import React from "react";

export default class SelectComponent extends React.Component{

    constructor(props){
        super(props);
        this.productChanged = this.productChanged.bind(this);
        this.products = [
            { id: 301, name: "Cep Telefonu", price: 2350.0 },    
            { id: 302, name: "Masaüstü Bilgisayar", price: 6545.0 },    
            { id: 303, name: "Dizüstü Bilgisayar", price: 9865.0 },    
            { id: 304, name: "Akıllı Saat", price: 1420.0 },    
            { id: 305, name: "Kablosuz Kulaklık", price: 570.0 },    
            { id: 306, name: "Tablet", price:320.0 },    
            { id: 307, name: "Televizyon", price:769.0 },    
            { id: 308, name: "Oyun Konsolu", price: 2780.0 },    
            { id: 309, name: "Yazıcı", price: 90.0 },    
            { id: 310, name: "Harici Hard Disk", price: 820.0 },    
            { id: 311, name: "Akıllı Hoparlör", price: 1575.0 },    
            { id: 312, name: "E-kitap Okuyucu", price: 1150.0 }
        ]
        const currentProductId = 302;
        this.state = {
            currentProductId : currentProductId,
            currentProduct : this.products.find(p => p.id === currentProductId )
        }
    }
    
    productChanged(event){
        const currentProductId = Number(event.target.value);
        this.setState({
            currentProductId : currentProductId,
            currentProduct : this.products.find(p => p.id === currentProductId )
        })
    }

    render() {
        return (
            <>
                <h1>Seçim</h1>
                <p>Seçilen : {this.state.currentProductId}</p>
                <p>Adı : {this.state.currentProduct.name}</p>
                <p>Fiyatı : {this.state.currentProduct.price}</p>
                <select value={this.state.currentProductId} onChange={this.productChanged} >
                    <option key={0} value={0} >
                        -- Seçiniz --
                    </option>

                    {this.products.map( product => 
                        <option key={product.id} value={product.id}>
                            {product.name}
                        </option>
                    )}
                </select>
            </>
        )
    }
}