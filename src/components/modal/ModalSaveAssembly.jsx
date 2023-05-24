import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useCookies} from "react-cookie";
import axios from "axios";
import Form from "react-bootstrap/Form";
import '../../Styles.css'
import {useNavigate} from "react-router-dom";

const ModalSaveAssembly = ({show, setShow, data}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [assemblyName, setAssemblyName] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const hideModal = () => {
        setAssemblyName('')
        setError(false)
        setShow(false)
    }

    const Click = () => {

        if(assemblyName === '') {
            setError(true)
            return
        }

        const jwt = 'Bearer ' + cookies.token

        const dataToSave = data

        dataToSave.name = assemblyName

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/assembly/create',
            headers: {
                'Authorization': jwt
            },
            data : dataToSave
        };

        axios.request(config)
            .then((response) => {
                navigate('/my/assembly')
                hideModal()
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={hideModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Сохранение сборки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Form.Group className="mb-3" id="formBasicEmail" style={{width: "90%", margin: "auto"}}>
                    <div style={{height: "2rem"}}/>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="formBasicEmail"
                            type="email"
                            placeholder="name@example.com"
                            value={assemblyName}
                            onChange={(value) => {
                                setAssemblyName(value.target.value);
                                setError(false)
                            }}
                            isInvalid={error}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>{"Введите название"}</Form.Control.Feedback>

                        <label htmlFor="formBasicEmail">Название сборки</label>
                    </Form.Floating>
                </Form.Group>

                <div style={{height: "1rem"}}/>
                <Button variant="outline-success" size="lg" className="button_login" onClick={Click}>
                    Сохранить
                </Button>
                <div style={{height: "1rem"}}/>

            </Modal.Body>
        </Modal>
    );
};

export default ModalSaveAssembly;