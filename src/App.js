import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Configurator from "./pages/Configurator";

function App() {
  return (
      <Routes>

        <Route path="/" element={<HomePage/>}/>

        <Route path="/configurator" element={<Configurator/>}/>

        <Route path="/*" element={<Navigate to={"/"}/>} />

      </Routes>
  );
}

export default App;
