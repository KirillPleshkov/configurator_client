import React from 'react';
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

const DisabledButton = () => {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Выбраны не все комплектующие</Tooltip>}>
            <span className="d-inline-block">
                <Button variant="success" disabled style={{ pointerEvents: 'none' }}>
                   Сохранить сборку
                    </Button>
            </span>
        </OverlayTrigger>
    );
};

export default DisabledButton;