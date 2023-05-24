import React, {useState} from 'react';
import '../../Styles.css'
import {useNavigate} from "react-router-dom";

const AssemblyInfo = ({element, id}) => {

    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();

    const Click = () => {
        navigate('/current/assembly/' + element.id)
    }

    return (
        <div className="assembly_info" onClick={Click}>
            <div style={{marginLeft: "1rem", marginRight: "1rem", marginTop: "1rem", width: "2rem"}}>
                {id})
            </div>
            <div style={{marginLeft: "5rem", marginRight: "10rem", marginTop: "1rem", width: "10rem"}}>
                {element.name}
            </div>
            <div style={{marginTop: "1rem"}}>
                {element.createdAt.toString().split('T')[0]}
            </div>
        </div>
    );
};

export default AssemblyInfo;