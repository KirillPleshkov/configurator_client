import React from 'react';
import {Dropdown} from "react-bootstrap";
import MyDropDownItem from "./MyDropDownItem";

const MyDropDown = ({name, elements, setSelectedElement}) => {

    return (
        <>
            <div style={{width: "100%"}}/>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        (elements !== null) ?
                            elements.map((element, index) => (
                                <MyDropDownItem key={index} element={element} setSelectedElement={setSelectedElement}/>
                            )) :
                            <></>
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>

    );
};

export default MyDropDown;