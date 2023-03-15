import { useState } from "react";

export const EmployeeComponent = () => {
    const initialObject = { id:123, name:'Belirsiz', salary:8506 };
    const [object, setObject] = useState(initialObject);

    const nameChanged = (e) => {
        e.preventDefault();
        setObject({
            ...object,
            name: e.target.value
        })

    }

    const salaryChanged = (e) => {
        e.preventDefault();
        setObject({
            ...object,
            salary: e.target.value
        })

    }

    const objectChanged = (e) => {
        e.preventDefault();
        setObject({
            ...object,
            name: nameChanged(),
            salary: salaryChanged()
        })
    }


    return (
        <>
            {object.id} {object.name} {object.salary} <br/>
            id: {initialObject.id}
            name: {object.name} <input type="text" name="name" 
            value={object.name || ''} onChange={nameChanged}/>
            salary: {object.salary}  <input type="number" name="salary" 
            value={object.salary || ''} onChange={salaryChanged}/>
            <input type="submit" name="Sakla" onClick={objectChanged} /><br/>
        </>
    )
}