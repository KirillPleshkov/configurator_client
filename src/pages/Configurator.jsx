import React from 'react';
import NavbarMain from "../components/navbar/NavbarMain";
import RamCell from "../components/cells/RamCell";

const Configurator = () => {
    return (
        <div>
            <NavbarMain/>
            Конфигуратор
            <RamCell/>
        </div>
    );
};

export default Configurator;