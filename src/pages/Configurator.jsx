import React, {useEffect, useState} from 'react';
import NavbarMain from "../components/navbar/NavbarMain";
import RamCell from "../components/cells/RamCell";
import DataStorageCell from "../components/cells/DataStorageCell";
import ProcessorCoolingCell from "../components/cells/ProcessorCoolingCell";
import PowerSupplyCell from "../components/cells/PowerSupplyCell";
import MotherboardCell from "../components/cells/MotherboardCell";
import VideoCardCell from "../components/cells/VideoCardCell";
import ProcessorCell from "../components/cells/ProcessorCell";

const Configurator = () => {

    const [processorElement, setProcessorElement] = useState(null)
    const [motherboardElement, setMotherboardElement] = useState(null)
    const [videoCardElement, setVideoCardElement] = useState(null)
    const [powerSupplyElement, setPowerSupplyElement] = useState(null)
    const [ramElement, setRamElement] = useState(null)
    const [dataStorageElement, setDataStorageElement] = useState(null)
    const [processorCoolingElement, setProcessorCoolingElement] = useState(null)

    const [socketId, setSocketId] = useState(null)
    const [performanceLevel, setPerformanceLevel] = useState(null)
    const [power, setPower] = useState(null)


    useEffect(() => {

        if(processorElement !== null)
            setSocketId(processorElement.socketId)
        else if (motherboardElement !== null)
            setSocketId(motherboardElement.socketId)
        else
            setSocketId(null)

    }, [processorElement, motherboardElement])

    useEffect(() => {

        if(processorElement !== null)
            setPerformanceLevel(processorElement.performanceLevel)
        else if (videoCardElement !== null)
            setPerformanceLevel(videoCardElement.performanceLevel)
        else
            setPerformanceLevel(null)

    }, [processorElement, videoCardElement])

    useEffect(() => {

        if(videoCardElement !== null)
            setPower(videoCardElement.recommendedPower)
        else if (powerSupplyElement !== null)
            setPower(powerSupplyElement.power)
        else
            setPower(null)

    }, [videoCardElement, powerSupplyElement])


    return (
        <div>
            <NavbarMain/>
            Конфигуратор
            <ProcessorCell
                selectedElement={processorElement}
                setSelectedElement={setProcessorElement}
                socketId={socketId}
                performanceLevel={performanceLevel}
            />

            <MotherboardCell
                selectedElement={motherboardElement}
                setSelectedElement={setMotherboardElement}
                socketId={socketId}
            />

            <VideoCardCell
                selectedElement={videoCardElement}
                setSelectedElement={setVideoCardElement}
                performanceLevel={performanceLevel}
                power={power}
            />

            <PowerSupplyCell
                selectedElement={powerSupplyElement}
                setSelectedElement={setPowerSupplyElement}
                power={power}
            />

            <RamCell
                selectedElement={ramElement}
                setSelectedElement={setRamElement}
            />

            <DataStorageCell
                selectedElement={dataStorageElement}
                setSelectedElement={setDataStorageElement}
            />

            <ProcessorCoolingCell
                selectedElement={processorCoolingElement}
                setSelectedElement={setProcessorCoolingElement}
            />

        </div>
    );
};

export default Configurator;