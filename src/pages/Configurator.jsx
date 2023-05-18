import React from 'react';
import NavbarMain from "../components/navbar/NavbarMain";
import RamCell from "../components/cells/RamCell";
import DataStorageCell from "../components/cells/DataStorageCell";
import ProcessorCoolingCell from "../components/cells/ProcessorCoolingCell";
import PowerSupplyCell from "../components/cells/PowerSupplyCell";

const Configurator = () => {
    return (
        <div>
            <NavbarMain/>
            Конфигуратор
            <RamCell/>
            <DataStorageCell/>
            <ProcessorCoolingCell/>
            <PowerSupplyCell/>
        </div>
    );
};

export default Configurator;