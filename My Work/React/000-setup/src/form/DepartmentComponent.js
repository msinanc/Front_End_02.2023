import { useState } from "react";

export const Department = () => {
    const initialState = 'Fibiler';
    const [education, setEducation] = useState(initialState);

    const educationChanged = (event) => {
        event.preventDefault();
        setEducation(event.target.value);
    }

    const save = (event) => {
        event.preventDefault();
        alert('Alınan değer: ' + education);
    }

    return (
        <form>
            Eğitim: <input type="text" name="education" value={education}
            onChange={educationChanged} /><br/>
            Değer: <label style={{color:"steelblue"}}>{education}</label>
            <input type="submit" name="Sakla" onClick={save} />

        </form>
    )
}