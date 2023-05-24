import React, {useEffect, useState} from 'react';
import NavbarMain from "../navbar/NavbarMain";
import ProcessorCell from "../cells/ProcessorCell";
import MotherboardCell from "../cells/MotherboardCell";
import VideoCardCell from "../cells/VideoCardCell";
import PowerSupplyCell from "../cells/PowerSupplyCell";
import RamCell from "../cells/RamCell";
import DataStorageCell from "../cells/DataStorageCell";
import ProcessorCoolingCell from "../cells/ProcessorCoolingCell";
import {Button} from "react-bootstrap";
import {useCookies} from "react-cookie";
import axios from "axios";
import ModalLogin from "../modal/ModalLogin";
import ModalSaveAssembly from "../modal/ModalSaveAssembly";
import DisabledButton from "./DisabledButton";

const Configuration = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

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

    const [processorPrice, setProcessorPrice] = useState(0)
    const [motherboardPrice, setMotherboardPrice] = useState(0)
    const [videoCardPrice, setVideoCardPrice] = useState(0)
    const [powerSupplyPrice, setPowerSupplyPrice] = useState(0)
    const [ramPrice, setRamPrice] = useState(0)
    const [dataStoragePrice, setDataStoragePrice] = useState(0)
    const [processorCoolingPrice, setProcessorCoolingPrice] = useState(0)

    const [price, setPrice] = useState(0)

    const [modalLoginShow, setModalLoginShow] = useState(false)
    const [modalSaveAssemblyShow, setModalSaveAssemblyShow] = useState(false)

    const [isCompleted, setIsCompleted] = useState(false)
    const [dataToSave, setDataToSave] = useState(null)

    useEffect(() => {

        const price = processorPrice + motherboardPrice + videoCardPrice +
            powerSupplyPrice + ramPrice + dataStoragePrice + processorCoolingPrice

        setPrice(price)

        if(processorPrice !== 0 && motherboardPrice !== 0 &&
            videoCardPrice !== 0 && powerSupplyPrice !== 0 &&
            ramPrice !== 0 && dataStoragePrice !== 0 &&
            processorCoolingPrice !== 0) {

            setIsCompleted(true)
        }
        else {
            setIsCompleted(false)
        }

    }, [processorPrice, motherboardPrice, videoCardPrice, powerSupplyPrice, ramPrice, dataStoragePrice, processorCoolingPrice])


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


    const AddAssembly = () => {

        if(cookies.token === undefined) {
            setModalLoginShow(true)
        }
        else {

            const data = {
                name: "",
                ramId: ramElement.id,
                powerSupplyId: powerSupplyElement.id,
                motherboardId: motherboardElement.id,
                processorId: processorElement.id,
                videoCardId: videoCardElement.id,
                dataStorageId: dataStorageElement.id,
                processorCoolingId: processorCoolingElement.id
            }

            setDataToSave(data)
            setModalSaveAssemblyShow(true)
        }

    }

    return (
        <div style={{width: "100%"}}>
            <NavbarMain/>
            <div style={{width: "100%", textAlign: "center", fontSize: 28, fontWeight: 500, marginTop: "2rem", marginBottom: "2rem"}}>Конфигуратор компьютера</div>

            <div style={{margin: "0 auto", width: "70%"}}>
                <ProcessorCell
                    selectedElement={processorElement}
                    setSelectedElement={setProcessorElement}
                    socketId={socketId}
                    performanceLevel={performanceLevel}
                    price={processorPrice}
                    setPrice={setProcessorPrice}
                />

                <MotherboardCell
                    selectedElement={motherboardElement}
                    setSelectedElement={setMotherboardElement}
                    socketId={socketId}
                    price={motherboardPrice}
                    setPrice={setMotherboardPrice}
                />

                <VideoCardCell
                    selectedElement={videoCardElement}
                    setSelectedElement={setVideoCardElement}
                    performanceLevel={performanceLevel}
                    power={power}
                    price={videoCardPrice}
                    setPrice={setVideoCardPrice}
                />

                <PowerSupplyCell
                    selectedElement={powerSupplyElement}
                    setSelectedElement={setPowerSupplyElement}
                    power={power}
                    price={powerSupplyPrice}
                    setPrice={setPowerSupplyPrice}
                />

                <RamCell
                    selectedElement={ramElement}
                    setSelectedElement={setRamElement}
                    price={ramPrice}
                    setPrice={setRamPrice}
                />

                <DataStorageCell
                    selectedElement={dataStorageElement}
                    setSelectedElement={setDataStorageElement}
                    price={dataStoragePrice}
                    setPrice={setDataStoragePrice}
                />

                <ProcessorCoolingCell
                    selectedElement={processorCoolingElement}
                    setSelectedElement={setProcessorCoolingElement}
                    price={processorCoolingPrice}
                    setPrice={setProcessorCoolingPrice}
                />

                <div style={{display: "flex", marginTop: "2rem", marginBottom: "2rem"}}>
                    <div style={{width: "100%", fontSize: 24, fontWeight: 500}}>
                        Стоимость данной конфигурации: от {price}р
                    </div>
                    {
                        isCompleted ?
                            <Button variant="success" onClick={AddAssembly}>Сохранить сборку</Button> :
                            <DisabledButton/>
                    }
                </div>
            </div>
            {
                (modalLoginShow === true) ?
                    <ModalLogin
                        show={modalLoginShow}
                        setShow={setModalLoginShow}
                    /> :
                    <></>
            }
            {
                (modalSaveAssemblyShow === true) ?
                    <ModalSaveAssembly
                        show={modalSaveAssemblyShow}
                        setShow={setModalSaveAssemblyShow}
                        data={dataToSave}
                    /> :
                    <></>
            }
        </div>
    );
};

export default Configuration;