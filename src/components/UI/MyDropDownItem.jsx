import React from 'react';
import {Dropdown} from "react-bootstrap";

const MyDropDownItem = ({setSelectedElement, element}) => {

    return (
        <Dropdown.Item onClick={() => setSelectedElement(element)}>{element.name}</Dropdown.Item>
    );
};

export default MyDropDownItem;