import { Link } from "react-router-dom";

export default function NavigationSource() {

    return (
        <div>
            Kaynak<br/>
            <br/>
            <Link to="/target">Ereğe Git</Link> {' - '}
            <Link to="/target/301">Ereğe Değiştirgenle Git</Link>
        </div>
    )
}