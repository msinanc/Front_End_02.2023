export default function MyComponent() {
    const myValue = 123;
    const getMyValue=() => {
        return 321;
    }
    
    const getMyResult=(parameter) => {
        return parameter * parameter;
    }

    return (
        <div>
            <h6>Bileşenim</h6>
            Değerim : {myValue}<br/>
            İşlevim : {getMyValue()}<br/>
            Sonuç A : {getMyResult(9)}<br/>
            Sonuç B : {getMyResult(getMyValue())}<br/>
        </div>
    )
}