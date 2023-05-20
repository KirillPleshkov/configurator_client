import React, {useEffect, useState} from 'react';
import {CloseButton} from "react-bootstrap";
import axios from "axios";
import ModalComponentInfo from "../modal/ModalComponentInfo";
import ModalCostsInfo from "../modal/ModalCostsInfo";

const MyInfo = ({element, setSelectedElement, componentName, setPrice, price}) => {

    const [currentPrice, setCurrentPrice] = useState(null)
    const [isModalInfoShow, setIsModalInfoShow] = useState(false)
    const [currentContent, setCurrentContent] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/components-info/get-minimal-price',
            data: {url: element.url}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setPrice(response.data.minimalPrice)
                setCurrentPrice('Стоимость от ' + response.data.minimalPrice.toString() + 'р')

                console.log(1111)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/components-info/get-components-info',
            data: {url: element.url}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setContent(response.data)
                console.log(1111)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    return (
        <div style={{display: "flex", width: "100%"}}>
            <div style={{fontSize: 18, marginLeft: "3rem", whiteSpace: "nowrap", marginTop: "2px"}}>{element.name}</div>
            <div style={{width: "80%"}}/>
            {
                (currentPrice !== null) ?
                    <div style={{marginTop: "-5px"}}>
                        <div style={{textAlign: "center", whiteSpace: "nowrap"}}>{currentPrice}</div>
                        <div onClick={() => setIsModalInfoShow(true)} style={{fontSize: 12, margin: "auto", textAlign: "center", cursor: "pointer", textDecoration: "underline"}}>Подробнее</div>
                    </div> :
                    <div style={{textAlign: "center", whiteSpace: "nowrap"}}>Подождите...</div>
            }

            <CloseButton onClick={() => {setSelectedElement(null); setPrice(0)}} style={{marginLeft: "5rem", marginTop: "3px", flexShrink: 0}}/>

            {
                (currentContent !== null) ?
                    <ModalCostsInfo
                        setCurrentContent={setCurrentContent}
                        currentContent={currentContent}
                    /> :
                    <ModalComponentInfo
                        show={isModalInfoShow}
                        setShow={setIsModalInfoShow}
                        content={content}
                        componentName={componentName}
                        setCurrentContent={setCurrentContent}
                    />
            }

        </div>
    );
};

export default MyInfo;