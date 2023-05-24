import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Configurator from "./pages/Configurator";
import MyAssemblyPage from "./pages/MyAssemblyPage";
import CurrentAssemblyPage from "./pages/CurrentAssemblyPage";

function App() {
    return (
        <Routes>

            <Route path="/" element={<HomePage/>}/>

            <Route path="/configurator" element={<Configurator/>}/>

            <Route path="/my/assembly" element={<MyAssemblyPage/>}/>

            <Route path="/current/assembly/:id" element={<CurrentAssemblyPage/>}/>

            <Route path="/*" element={<Navigate to={"/"}/>}/>

        </Routes>
    );
}

export default App;
