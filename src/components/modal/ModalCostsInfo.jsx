import React, {useEffect, useState} from 'react';
import {Modal, Spinner} from "react-bootstrap";
import axios from "axios";
import MyPriceInfo from "../UI/MyPriceInfo";

const ModalCostsInfo = ({currentContent, setCurrentContent}) => {

    const [content, setContent] = useState(null)

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/price/get-price',
            headers: {
                'Content-Type': 'application/json'
            },
            data : {url: currentContent.url}
        };

        axios.request(config)
            .then((response) => {
                console.log(currentContent.url)
                setContent(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    return (
        <>
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => {setCurrentContent(null)}}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{color: "#599191"}}>{currentContent.header}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        (content !== null) ?
                            content.map((element, i) => (
                                <MyPriceInfo content={element} key={i}/>
                            )) :
                            <Spinner animation="border" style={{marginLeft: "49%"}}/>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalCostsInfo;