export default function TripleRecursiveComponent(){
    const child = () => {
        return (
            <div>
                Burası <strong>Çocuk</strong>
            </div>
        )
    }

    const father = (input) => {
        return (
            <div>
                {input}'un babası
            </div>
        )
    }

    return (
        <div>
            {child()}<br/>
            {father(child())}<br/>
            Burası <strong>Dede</strong>
        </div>

    )
}