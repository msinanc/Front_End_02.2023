export default function EventComponent(){
    const handle = () => {
        alert('Kotarılıyor');
    }
    
    const deal = (input) => {
        alert('Uğraşılıyor' + input);
    }
    
    const manage = (event) => {
        alert('İşletiliyor ' + event.target.id + ' ' + event.target.tagName);
    }

    return (
        <div>
            <h1>Biçim</h1>
            <button onClick={() => alert('İçleniyor')}>Çizgi İçi</button><br/>
            
            <button onClick={handle}>Ok</button><br/>

            <button onClick={() => deal('Girdi')}>Değiştirgen</button><br/>
            
            <button id="manager" onClick={(event) => manage(event)}>Olay</button><br/>
        </div>
        
    )

}