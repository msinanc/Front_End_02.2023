import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}