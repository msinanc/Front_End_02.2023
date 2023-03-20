import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EmployeeDetail } from "../../fetch/EmployeeDetail";
import { EmployeeList } from "../../fetch/EmployeeList";
import NavigationIndex from "../module/NavigationIndex";
import ApplicationLayout from "./ApplicationLayout";

export default function ApplicationRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ApplicationLayout/>}>
                    <Route index element={<NavigationIndex/>}/>
                    <Route path="employees" element={<EmployeeList/>} />
                    <Route path="employee/:id" element={<EmployeeDetail/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}