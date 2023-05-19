import React, {useEffect} from 'react';

const MyPriceInfo = ({content}) => {


    return (
        <div style={{display: "flex", width: "100%", height: "10rem"}}>
            <div style={{borderBottom: "1px solid #818a8a", width: "13rem"}}>
                <div style={{marginRight: "1rem", width: "13rem"}}>
                    <div style={{width: "13rem", height: "10rem", display: "table-cell", verticalAlign: "middle", textAlign: "center"}}>
                        <img src={content.img} style={{maxHeight: "9rem", maxWidth: "11rem", display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                    </div>
                </div>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", borderRight: "1px solid #818a8a", borderLeft: "1px solid #818a8a", width: "27rem"}}>
                <div style={{marginLeft: "1rem", width: "25rem"}}>
                    <a href={content.storeUrl} style={{textDecoration: "none", height: "8rem"}}>
                        <div style={{fontWeight: 600, fontSize: 20, color: "#599191", cursor: "pointer", wordBreak: "break-all", overflow: "hidden", height: "8rem", textOverflow: "ellipsis"}}>{content.header}</div>
                    </a>

                    <div style={{color: "#696969"}}>{content.storeName}</div>
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