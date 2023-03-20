import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { id } = useParams();

    const urlGet = "/public/db/employee" + id + '.json';

    const initialEmployee = [];
    const [employee, setEmployee] = useState(initialEmployee);

    const nameChanged = (event) => {
        event.preventDefault();
        setEmployee ({
            id: employee.id, 
            name: event.target.value, 
            salary: employee.salary
        });
    }

    const salaryChanged = (e) => {
        e.preventDefault();
        setEmployee ({
            ...employee,
            salary: e.target.value
        });
    }

    useEffect(() => {
        fetch(urlGet)
            .then ( data => data.json() )
            .then ( employee => setEmployee(employee))
    },[urlGet])

    return (
        <div>
            <h3>Çalışan Bilgileri</h3>
            <>
                {employee}
            </>
            <hr/>
            <form onSubmit={null} >
                Öz: {employee.id} <br/>
                Ad: <input type="text" name="name"
                value={employee.name || ''} onChange={nameChanged}  /><br/>
                Maaş: <input type="number" name="price"
                value={employee.salary || ''} onChange={salaryChanged} /><br/>
                <input type="submit" name="Sakla" /><br/>

            </form>


        </div>
    )
}