import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FetchGet } from "../../fetch/FetchGet";
import { FetchList } from "../../fetch/FetchList";
import NavigationIndex from "../module/NavigationIndex";
import NavigationSource from "../module/NavigationSource";
import NavigationTarget from "../module/NavigationTarget";
import ApplicationLayout from "./ApplicationLayout";

export default function ApplicationRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ApplicationLayout/>} >
                    <Route index element={<NavigationIndex/>}/>
                    <Route path="source" element={<NavigationSource/>}/>
                    <Route path="target" element={<NavigationTarget/>}/>
                    <Route path="target/:id" element={<NavigationTarget/>}/>
                    <Route path="products" element={<FetchList/>}/>
                    <Route path="product/:id" element={<FetchGet/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}