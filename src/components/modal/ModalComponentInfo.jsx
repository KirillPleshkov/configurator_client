import React from 'react';
import {Modal, Spinner} from "react-bootstrap";
import MyComponentInfo from "../UI/MyComponentInfo";

const ModalComponentInfo = ({show, setShow, content, componentName, setCurrentContent}) => {

    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{color: "#599191"}}>{componentName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        (content !== null) ?
                            content.map((element, i) => (
                                <MyComponentInfo key={i} content={element} setCurrentContent={setCurrentContent}/>
                            )) :
                            <Spinner animation="border" style={{marginLeft: "49%"}}/>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalComponentInfo;