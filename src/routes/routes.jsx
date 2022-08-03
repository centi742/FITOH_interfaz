import React from "react";
import Home from "../page/home";
import Catalogo from "../page/catalogo";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
const routes=()=>{
    return(
        <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Catalogo"  element={<Catalogo/>}/>
        </Routes>
    </Router>
    )
}

export default routes;