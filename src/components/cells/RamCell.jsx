import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import axios from "axios";
import MyDropDown from "../UI/MyDropDown";
import MyInfo from "../UI/MyInfo";

const RamCell = ({selectedElement, setSelectedElement, setPrice, price}) => {

    const [dropDownElements, setDropDownElements] = useState(null)
    const urlName = 'ram'
    const componentName = 'Оперативная память'

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
                style={{ width: "100%", minWidth: "52rem", height: "4rem"}}
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
                                    setPrice={setPrice}
                                    price={price}
                                />
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RamCell;