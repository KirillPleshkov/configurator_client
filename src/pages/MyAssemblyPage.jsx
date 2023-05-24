import React, {useEffect, useState} from 'react';
import NavbarMain from "../components/navbar/NavbarMain";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Spinner} from "react-bootstrap";
import AssemblyInfo from "../components/UI/AssemblyInfo";

const MyAssemblyPage = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    const navigate = useNavigate()

    const [data, setData] = useState(null)

    useEffect(() => {
        if(cookies.token === undefined)
            navigate('/')
    }, [cookies])

    useEffect(() => {
        const jwt = 'Bearer ' + cookies.token

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/assembly',
            headers: {
                'Authorization': jwt
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <>
            <NavbarMain/>
            <div style={{width: "100%", textAlign: "center", fontSize: 28, fontWeight: 500, marginTop: "2rem", marginBottom: "2rem"}}>Мои сборки</div>

            <div style={{width: "50%", margin: "0 auto"}}>

                <div style={{display: "flex", width: "50rem", height: "4rem", borderBottom: "1px solid #818a8a"}}>
                    <div style={{marginLeft: "1rem", marginRight: "1rem", marginTop: "1rem", width: "2rem"}}>
                        Номер
                    </div>
                    <div style={{marginLeft: "5rem", marginRight: "10rem", marginTop: "1rem", width: "10rem"}}>
                        Название
                    </div>
                    <div style={{marginTop: "1rem"}}>
                        Дата создания
                    </div>
                </div>

                {
                    (data !== null) ?
                        <>
                            {
                                data.map((element, id) => (
                                    <AssemblyInfo id={id} element={element}/>
                                ))
                            }
                        </> : <Spinner animation="border" style={{marginLeft: "49%"}}/>
                }
                <div style={{height: "1rem"}}/>
            </div>

        </>
    );
};

export default MyAssemblyPage;