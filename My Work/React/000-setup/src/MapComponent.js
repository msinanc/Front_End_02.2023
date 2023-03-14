export default function MapComponent(){
    const names = ['HTML', 'CSS', 'JavaScript', 'JSON', 'AJAX']
    return (
        <ul>
        <h1>Eşlem</h1>
        {names.map(name =>
            <li key={name} style={{ textAlign:'left', fontWeight:'bold', color:'steelBlue'}}>
                {name}
            </li>    
        )}
        </ul>
    )
}