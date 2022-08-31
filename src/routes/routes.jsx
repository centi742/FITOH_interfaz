import React from "react";
import Home from "../page/home";
import Catalogo from "../page/catalogo";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Contacs from "../page/contacs";
import Importadora from "../page/importadora";
const routes=()=>{
    return(
        <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Catalogo"  element={<Catalogo/>}/>
            <Route path="/Contacs"  element={<Contacs/>}/>
            <Route path="/Importadora"  element={<Importadora/>}/>
        </Routes>
    </Router>
    )
}

export default routes;