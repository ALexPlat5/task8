import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateEmail } from "../features/logInFunctions";
import { Page } from "../views/Counter/style";
import { Navigate } from "react-router-dom";
import storeMSTC from "../app/mst-store";
import { observer } from 'mobx-react-lite'
import { Outlet } from "react-router-dom";

const MstcContainer=observer(() => (
    <>
        {storeMSTC.getIsLogged()?
            <Page>
                <Navigate to='/login-mst/profile'/>
                <Outlet />
                <button onClick={storeMSTC.logOutMSTC}>Выйти</button>
            </Page>:
            <Page>
                <Navigate to='/login-mst'/>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        
                        storeMSTC.logIn(values.email, values.password)
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
        }
    </>
))

export default MstcContainer
