import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import MyAssemblyComponentCell from "../components/cells/MyAssemblyComponentCell";
import {Spinner} from "react-bootstrap";
import NavbarMain from "../components/navbar/NavbarMain";
import AssemblyInfo from "../components/UI/AssemblyInfo";

const CurrentAssemblyPage = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token'])

    const [content, setContent] = useState(null)
    const [price, setPrice] = useState(0)

    const [processorPrice, setProcessorPrice] = useState(0)
    const [motherboardPrice, setMotherboardPrice] = useState(0)
    const [videoCardPrice, setVideoCardPrice] = useState(0)
    const [powerSupplyPrice, setPowerSupplyPrice] = useState(0)
    const [ramPrice, setRamPrice] = useState(0)
    const [dataStoragePrice, setDataStoragePrice] = useState(0)
    const [processorCoolingPrice, setProcessorCoolingPrice] = useState(0)

    useEffect(() => {

        const price = processorPrice + motherboardPrice + videoCardPrice +
            powerSupplyPrice + ramPrice + dataStoragePrice + processorCoolingPrice

        setPrice(price)

    }, [processorPrice, motherboardPrice, videoCardPrice, powerSupplyPrice, ramPrice, dataStoragePrice, processorCoolingPrice])

    useEffect(() => {
        if(cookies.token === undefined)
            navigate('/')
    }, [cookies])

    useEffect(() => {

        const jwt = 'Bearer ' + cookies.token

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/assembly/' + id,
            headers: {
                'Authorization': jwt
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setContent(response.data)
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])

    return (
        <>
            <NavbarMain/>

            {
                content ?
                    <>
                        <div style={{width: "100%", textAlign: "center", fontSize: 28, fontWeight: 500, marginTop: "2rem", marginBottom: "2rem"}}>Название: {content.name}</div>

                        <div style={{width: "50%", margin: "0 auto"}}>

                            <MyAssemblyComponentCell setPrice={setProcessorPrice} componentName={'Процессор'} element={content.processor}/>
                            <MyAssemblyComponentCell setPrice={setMotherboardPrice} componentName={'Материнская плата'} element={content.motherboard}/>
                            <MyAssemblyComponentCell setPrice={setVideoCardPrice} componentName={'Видеокарта'} element={content.videoCard}/>
                            <MyAssemblyComponentCell setPrice={setPowerSupplyPrice} componentName={'Блок питания'} element={content.powerSupply}/>
                            <MyAssemblyComponentCell setPrice={setRamPrice} componentName={'Оперативная память'} element={content.ram}/>
                            <MyAssemblyComponentCell setPrice={setDataStoragePrice} componentName={'Хранение данных'} element={content.dataStorage}/>
                            <MyAssemblyComponentCell setPrice={setProcessorCoolingPrice} componentName={'Охлаждение процессора'} element={content.processorCooling}/>
                            <div style={{width: "100%", fontSize: 24, fontWeight: 500, marginTop: "1rem"}}>
                                Стоимость данной конфигурации: от {price}р
                            </div>
                        </div>
                    </>
                    : <Spinner animation="border" style={{marginLeft: "49%"}}/>
            }

        </>

    );
};

export default CurrentAssemblyPage;