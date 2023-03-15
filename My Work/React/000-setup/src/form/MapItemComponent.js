export default function MapItemComponent({p}){
    
    
    return (
        <>
            <h1>Çizelge Bileşeni</h1>

            <div>{p.id}</div>
            <div>{p.name}</div>
            <div>{p.price}</div>
          
        </>
    )
}