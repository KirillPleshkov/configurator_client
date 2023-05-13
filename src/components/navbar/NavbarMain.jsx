import React, {useState} from 'react';
import {useCookies} from "react-cookie";
import NavbarLogout from "./NavbarLogout";
import NavbarLogin from "./NavbarLogin";
import ModalLogin from "../modal/ModalLogin";
import ModalRegistration from "../modal/ModalRegistration";

const NavbarMain = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalRegistrationShow, setModalRegistrationShow] = useState(false);

    return (
        <>
            {
                (cookies.token === undefined) ?
                    <NavbarLogout
                        setModalLoginShow={setModalLoginShow}
                        setModalRegistrationShow={setModalRegistrationShow}
                    /> :
                    <NavbarLogin/>
            }
            <ModalLogin
                show={modalLoginShow}
                setShow={setModalLoginShow}
            />
            <ModalRegistration
                show={modalRegistrationShow}
                setShow={setModalRegistrationShow}
            />
        </>
    );
};

export default NavbarMain;