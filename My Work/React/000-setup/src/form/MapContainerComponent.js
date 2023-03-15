import MapItemComponent from "./MapItemComponent"


export const MapContainerComponent = () => {
    const products = [
        { id:301, name:'Cep Telefonu', price:5400.00 },
        { id:302, name:'Dizüstü Bilgisayar', price:4650.00 },
        { id:303, name:'Masaüstü Bilgisayar', price:3545.00 }
    ]

    const mapItems = products.map((p) => (
        <MapItemComponent key={p.id} p={p} />
    ));

    return (
        <>
            
        </>
    )

}