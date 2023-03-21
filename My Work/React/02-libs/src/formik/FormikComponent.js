import { useFormik } from "formik";
import * as Yup from 'yup'

export default function FormikComponent() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: "" // added missing email field
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(8, 'En az sekiz karakter olmalı')
                .required('Kullanıcı adı gereklidir'),

            password: Yup.string()
                .min(8, 'En az sekiz karakter olmalı')
                .required('Parola gereklidir'),

            email: Yup.string()
                .email('Geçerli bir e-posta adresi giriniz')
                .required('E-posta adresi gereklidir')
        }),
        onSubmit: (values) => {
            alert(`${values.username} ${values.password}`);
        },
    });

    return (
        <>
            <h1>Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Kullanıcı:</td>
                            <td>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div>{formik.errors.username}</div>
                                ) : null}
                            </td>
                        </tr>

                        <tr>
                            <td>Parola:</td>
                            <td>
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </td>
                        </tr>

                        <tr>
                            <td>E-posta:</td>
                            <td>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>
                                ) : null}
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Gönder</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}