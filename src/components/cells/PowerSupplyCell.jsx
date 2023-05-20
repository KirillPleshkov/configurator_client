import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "react-bootstrap";
import MyDropDown from "../UI/MyDropDown";
import MyInfo from "../UI/MyInfo";

const PowerSupplyCell = ({selectedElement, setSelectedElement, power}) => {
    const [dropDownElements, setDropDownElements] = useState(null)
    const urlName = 'power-supply'
    const componentName = 'Блок питания'

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/'+urlName+'/all-characteristics',
            data: {power}
        }

        axios.request(config)
            .then((response) => {
                setDropDownElements(response.data)
                console.log(1111)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [power])

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

export default PowerSupplyCell;