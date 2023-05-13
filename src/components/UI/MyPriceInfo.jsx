import React, {useEffect} from 'react';

const MyPriceInfo = ({content}) => {


    return (
        <div style={{display: "flex", width: "100%", height: "10rem"}}>
            <div style={{borderBottom: "1px solid #818a8a"}}>
                <img src={content.img} style={{marginTop: "50%", transform: "translate(0, -50%)", marginRight: "1rem", width: "9rem"}}/>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", borderRight: "1px solid #818a8a", borderLeft: "1px solid #818a8a", width: "100%"}}>
                <div style={{marginLeft: "1rem"}}>
                    <a href={content.storeUrl} style={{textDecoration: "none"}}>
                        <div style={{fontWeight: 600, fontSize: 20, color: "#599191", cursor: "pointer"}}>{content.header}</div>
                    </a>

                    <div style={{color: "#696969", marginTop: "1rem"}}>{content.storeName}</div>
                </div>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", width: "12rem"}}>
                <a href={content.storeUrl} style={{textDecoration: "none"}}>
                    <div style={{textAlign: "center", color: "#87abab", marginTop: "1rem", cursor: "pointer"}}>Цена: {content.price}</div>
                </a>
                <a href={content.storeUrl} style={{textDecoration: "none"}}>
                    <img src={content.imgStore} style={{marginLeft: "1rem", width: "7rem", marginTop: "1rem", cursor: "pointer"}}/>
                </a>
            </div>
        </div>
    );
};

export default MyPriceInfo;