import React from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../../img/logo.png";

const NavbarLogout = ({setModalLoginShow, setModalRegistrationShow}) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/configurator">
                                <Nav.Link >Конфигуратор</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => setModalLoginShow(true)}>Войти</Nav.Link>
                            <Nav.Link onClick={() => setModalRegistrationShow(true)}>Регистрация</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarLogout;