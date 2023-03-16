import { Link, Outlet } from "react-router-dom";

export default function ApplicationLayout() {

    return (
        <div>
            <h1>Başlık</h1>
            <Link to="/">Eve Git</Link>{' <----> '}
            <Link to="/source">Kaynağa Git</Link>
            <br/><br/>
            <Outlet/>
            <h2>Ayaklık</h2>
        </div>
    )
}