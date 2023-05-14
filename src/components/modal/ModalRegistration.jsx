import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {useCookies} from "react-cookie";

const ModalRegistration = (props) => {

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const Click = () => {
        removeCookie('token');
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/users/registration',
            headers: {
                'Content-Type': 'application/json'
            },
            data : {
                email: email,
                password1: password1,
                password2: password2
            }
        };

        axios.request(config)
            .then((response) => {
                setCookie('token', response.data.token);
                hideModal()
                console.log(1111)
            })
            .catch((error) => {
                const err = error.response.data.error
                if(err.email)
                    setEmailError(err.email)
                if(err.password)
                    setPasswordError(err.password)
            });

    }

    const hideModal = () => {

        setEmail('')
        setPassword1('')
        setPassword2('')
        setEmailError('')
        setPasswordError('')

        props.setShow(false)
    }

    return (
        <>
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={hideModal}
            >
                <Modal.Header closeButton/>

                <Modal.Body>
                    <div style={{padding: "1rem"}}>

                        <Modal.Title id="contained-modal-title-vcenter"
                                     style={{textAlign: 'center', fontSize: 30, width: "100%", marginLeft: "5 rem"}}>
                            Регистрация
                        </Modal.Title>

                        <Form>
                            <Form.Group className="mb-3" id="formBasicEmail" style={{width: "90%", margin: "auto"}}>
                                <div style={{height: "2rem"}}/>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="formBasicEmail"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(value) => {
                                            setEmail(value.target.value)
                                            setEmailError('')
                                        }}
                                        isInvalid={emailError.length !== 0}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{emailError}</Form.Control.Feedback>

                                    <label htmlFor="formBasicEmail">Электронная почта</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3" id="floatingPasswordCustom1" style={{width: "90%", margin: "auto"}}>
                                <div style={{height: "1rem"}}/>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPasswordCustom1"
                                        type="password"
                                        placeholder="Password"
                                        value={password1}
                                        onChange={(value) => {
                                            setPassword1(value.target.value)
                                            setPasswordError('')
                                        }}
                                        isInvalid={passwordError.length !== 0}
                                    />

                                    <label htmlFor="floatingPasswordCustom1">Пароль</label>
                                </Form.Floating>
                            </Form.Group>

                            <Form.Group className="mb-3" id="floatingPasswordCustom2" style={{width: "90%", margin: "auto"}}>
                                <div style={{height: "1rem"}}/>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPasswordCustom2"
                                        type="password"
                                        placeholder="Password"
                                        value={password2}
                                        onChange={(value) => {
                                            setPassword2(value.target.value)
                                            setPasswordError('')
                                        }}
                                        isInvalid={passwordError.length !== 0}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>{passwordError}</Form.Control.Feedback>

                                    <label htmlFor="floatingPasswordCustom2">Повторите пароль</label>
                                </Form.Floating>
                            </Form.Group>

                            <div style={{height: "1rem"}}/>
                            <Button variant="outline-success" size="lg" className="button_login" onClick={Click}>
                                Войти
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalRegistration;