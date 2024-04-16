import React from "react";
import Counters from "../containers/Counters";
import About from "../containers/About";
import Root from "../containers/Root";
import ErrorPage from "../containers/ErrorPage";
import LogInContainer from "../containers/LogInContainer";
import LogInReduxContainer from "../containers/LogInReduxContainer";
import ProfileContainer from "../containers/ProfileContainer";
import { Route, HashRouter, Routes } from 'react-router-dom';
import FormikContainer from "../containers/FormikContainer";
import ActivityContainer from "../containers/ActivityContainer";


function App() {    
    return ( 
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Root /> } >
                    <Route path="about" element={ <About /> } />
                    <Route path="counter" element={ <Counters/> } />
                    <Route path="login" element={ <LogInContainer /> } />
                    <Route path="login-formik" element={ <FormikContainer/>} />                    
                    <Route path="login-redux" element ={ <LogInReduxContainer />} />
                    <Route path=":typeLog/profile" element={ <ProfileContainer /> } />
                    <Route path="activity" element={ <ActivityContainer />} />
                </Route>
                <Route path="/*" element={ <ErrorPage/> } />
            </Routes>
        </HashRouter>
    )
}

export default App
