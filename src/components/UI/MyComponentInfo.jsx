import React, {useState} from 'react';

const MyComponentInfo = ({content, setCurrentContent}) => {

    const Click = () => {
        setCurrentContent(content)
    }

    return (
        <div style={{display: "flex", width: "100%", height: "12rem"}}>
            <div style={{borderBottom: "1px solid #818a8a"}}>
                <img src={content.img} style={{marginTop: "50%", transform: "translate(0, -50%)", marginRight: "1rem"}}/>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", borderRight: "1px solid #818a8a", borderLeft: "1px solid #818a8a", width: "100%"}}>
                <div style={{marginLeft: "1rem"}}>
                    <div style={{fontWeight: 600, fontSize: 20, color: "#599191", cursor: "pointer"}} onClick={Click}>{content.header}</div>
                    {
                        content.characteristics.map((element, i) => (
                            <div style={{color: "#696969"}} key={i}>{element.data}</div>
                        ))
                    }
                </div>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", width: "12rem"}}>
                <div style={{textAlign: "center", color: "#87abab", marginTop: "1rem", cursor: "pointer"}} onClick={Click}>Цена: {content.cost}</div>
            </div>
        </div>
    );
};

export default MyComponentInfo;