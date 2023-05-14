import React from 'react';
import NavbarMain from "../components/navbar/NavbarMain";
import RamCell from "../components/cells/RamCell";
import DataStorageCell from "../components/cells/DataStorageCell";

const Configurator = () => {
    return (
        <div>
            <NavbarMain/>
            Конфигуратор
            <RamCell/>
            <DataStorageCell/>
        </div>
    );
};

export default Configurator;