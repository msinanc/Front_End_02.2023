import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const urlList = "./db/employees.json"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch(urlList)
            .then ( data => data.json() )
            .then ( employees => setEmployees(employees) )
    },[employees])

    return (
        <>
            <h3>Çalışanlar Listesi</h3><br/>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {employees.map(employee =>
                    <ul key={employee.id} style={{ listStyleType: "circle" }} >
                        <li>{employee.id} </li>
                        <li>{employee.name} </li>
                        <li>{employee.salary} </li>
                        <li> <Link to={'/employee/' + employee.id} > Çalışan'a Git</Link> </li>
                    </ul>
                )}
            </div>
        </>
    )
} 