import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateEmail } from "../features/logInFunctions";
import { Page } from "../views/Counter/style";
import { logInFormik, selectIsLogged } from "../features/logIn/logInSlice";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function FormikContainer() {
    const dispatch = useAppDispatch()
    
    const isLogged = useSelector(selectIsLogged)

    if (isLogged) {
        return <Navigate to={'/login-formik/profile'} />
    }

    return (
        <Page>
            <h1>Any place in your app!</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    dispatch(logInFormik(values))
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                    <Field type="email" validate={!validateEmail} name="email" />
                    <p>Email: {values.email}</p>
                    <ErrorMessage name="email" component="div" />
                    <Field required minLength={6} type="password" name="password" />
                    <p>Password: {values.password}</p>
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
            </Formik>
        </Page>
    )
}
