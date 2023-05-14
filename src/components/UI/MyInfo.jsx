import React, {useEffect, useState} from 'react';
import {CloseButton} from "react-bootstrap";
import axios from "axios";
import ModalComponentInfo from "../modal/ModalComponentInfo";
import ModalCostsInfo from "../modal/ModalCostsInfo";

const MyInfo = ({element, setSelectedElement, urlName, componentName}) => {

    const [price, setPrice] = useState(null)
    const [isModalInfoShow, setIsModalInfoShow] = useState(false)
    const [currentContent, setCurrentContent] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/'+urlName+'/get-cost/' + element.id.toString(),
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setPrice('Стоимость от ' + response.data.cost.toString() + 'р')
                console.log(1111)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    useEffect(() => {

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/'+urlName+'/get-components/' + element.id.toString(),
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
                (price !== null) ?
                    <div style={{marginTop: "-5px"}}>
                        <div style={{textAlign: "center", whiteSpace: "nowrap"}}>{price}</div>
                        <div onClick={() => setIsModalInfoShow(true)} style={{fontSize: 12, margin: "auto", textAlign: "center", cursor: "pointer", textDecoration: "underline"}}>Подробнее</div>
                    </div> :
                    <div style={{textAlign: "center", whiteSpace: "nowrap"}}>Подождите...</div>
            }

            <CloseButton onClick={() => setSelectedElement(null)} style={{marginLeft: "5rem", marginTop: "3px"}}/>



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