import { Link, Outlet } from "react-router-dom";

export default function ApplicationLayout() {

    return (
        <div>
            <h1>Çalışan</h1><br/>
            <Link to="/" >Anasayfa</Link><br/>
            <Link to="/employees" >Çalışan Listesi</Link><br/>
            <Outlet/>
        </div>
    )
}