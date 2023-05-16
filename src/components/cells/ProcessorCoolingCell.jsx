import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "react-bootstrap";
import MyDropDown from "../UI/MyDropDown";
import MyInfo from "../UI/MyInfo";

const ProcessorCoolingCell = () => {
    const [dropDownElements, setDropDownElements] = useState(null)
    const [selectedElement, setSelectedElement] = useState(null)
    const urlName = 'processor-cooling'
    const componentName = 'Охлаждение процессора'

    useEffect(() => {

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/'+urlName+'/all-characteristics',
        }

        axios.request(config)
            .then((response) => {
                setDropDownElements(response.data)
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
                            {componentName}
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

export default ProcessorCoolingCell;