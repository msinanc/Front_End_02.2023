import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormikUse () {
    const formik = useFormik({
        initialValues: {
            username: ' ',
            email: ''
        },
        validationSchema : Yup.object({ 
            username: Yup.string()
                .min(8, 'En az 8 karakter olmalı')
                .required('Gerekli'),
            
            email: Yup.string()
                .email('Geçerli eposta girilmeli')
                .required('Gerekli')
        }),
        onSubmit: values => {
            alert(`${formik.values.username} ${formik.values.email}`)
        }
    })
    return (
        <>
            <h1>Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                Kullanıcı :
                <input id="username" name="username" type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                />
                {formik.errors.username}
                <br/>
                Eposta :
                <input id="email" name="email" type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.errors.email}
                <br/>
                <button type="submit">Gönder</button>
            </form>
        </>
    )
}