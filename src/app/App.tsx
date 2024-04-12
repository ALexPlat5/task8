import React from "react";
import Counters from "../containers/Counters";
import About from "../containers/About";
import Root from "../containers/Root";
import ErrorPage from "../containers/ErrorPage";
import { Route, HashRouter, Routes } from 'react-router-dom';

function App() {    
    return ( 
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Root /> } >
                    <Route path="about" element={ <About /> } />
                    <Route path="counter" element={ <Counters/> } />
                </Route>
                <Route path="/*" element={ <ErrorPage/> } />
            </Routes>
        </HashRouter>
    )
}

export default App
