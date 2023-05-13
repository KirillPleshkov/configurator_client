import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import axios from "axios";
import MyDropDown from "../UI/MyDropDown";
import MyInfo from "../UI/MyInfo";

const RamCell = () => {

    const [dropDownElements, setDropDownElements] = useState(null)
    const [selectedElement, setSelectedElement] = useState(null)
    const urlName = 'ram'
    const componentName = 'Оперативная память'

    useEffect(() => {

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/ram/all-characteristics',
        }

        axios.request(config)
            .then((response) => {
                setDropDownElements(response.data.result)
                console.log(1111)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div>
            <Card
                bg={'secondary'}
                text={'white'}
                style={{ width: "70%" }}
                className="mb-2"
            >
                <Card.Body>
                    <div style={{ display: "flex"}}>
                        <div style={{fontSize: 20, whiteSpace: "nowrap", fontWeight: 600}}>
                            Оперативная память
                        </div>
                        {
                            (selectedElement === null) ?
                                <MyDropDown
                                    name={' Выберите'}
                                    elements={dropDownElements}
                                    setSelectedElement={setSelectedElement}
                                /> :
                                <MyInfo
                                    element={selectedElement}
                                    setSelectedElement={setSelectedElement}
                                    urlName={urlName}
                                    componentName={componentName}
                                />
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RamCell;