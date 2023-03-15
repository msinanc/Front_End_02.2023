import { useState } from "react"

export const FormComponent = () => {
    const initialCompany = 'Godoro';
    const [company, setCompany] = useState(initialCompany);

    const companyChanged = (event) => {
        event.preventDefault();
        setCompany(event.target.value);
    }
    
    return (
        <>
            <h1>Biçim Örneği</h1>
            <form>
                Kurum: <input type="text" name="company" 
                value={company} onChange={companyChanged}/><br/>
                Değer: {company}<br/>
                <input type="submit" name="Sakla"/><br/>
            </form>
        </>
    )
}