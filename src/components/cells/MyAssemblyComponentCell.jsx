import React, {useEffect, useState} from 'react';
import axios from "axios";
import ModalCostsInfo from "../modal/ModalCostsInfo";
import ModalComponentInfo from "../modal/ModalComponentInfo";

const MyAssemblyComponentCell = ({element, componentName, setPrice}) => {

    const [currentPrice, setCurrentPrice] = useState(null)
    const [isModalInfoShow, setIsModalInfoShow] = useState(false)
    const [currentContent, setCurrentContent] = useState(null)
    const [content, setContent] = useState(null)

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/components-info/get-minimal-price',
            data: {url: element.url}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setCurrentPrice('Стоимость от ' + response.data.minimalPrice.toString() + 'р')
                setPrice(response.data.minimalPrice)
                console.log(1111)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/components-info/get-components-info',
            data: {url: element.url}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setContent(response.data)
                console.log(1111)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    return (
        <div style={{display: "flex", width: "100%", height: "5rem", minWidth: "50rem"}}>
            <div style={{borderBottom: "1px solid #818a8a", width: "13rem"}}>
                <div style={{marginRight: "1rem", width: "13rem", textAlign: "center", marginTop: "1rem", fontSize: 20, fontWeight: 500}}>
                    {componentName}
                </div>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", borderRight: "1px solid #818a8a", borderLeft: "1px solid #818a8a", width: "25rem"}}>
                <div style={{marginLeft: "1rem", width: "25rem"}}>

                    <div style={{fontWeight: 600, fontSize: 20, color: "#599191", wordBreak: "break-all", overflow: "hidden", height: "8rem", textOverflow: "ellipsis", marginTop: "1rem", marginLeft: "2rem"}}>{element.name}</div>

                </div>
            </div>
            <div style={{borderBottom: "1px solid #818a8a", width: "15rem"}}>
                {
                    (currentPrice !== null) ?
                        <div style={{marginTop: "1rem"}}>
                            <div style={{textAlign: "center", whiteSpace: "nowrap"}}>{currentPrice}</div>
                            <div onClick={() => setIsModalInfoShow(true)} style={{fontSize: 12, margin: "auto", textAlign: "center", cursor: "pointer", textDecoration: "underline"}}>Подробнее</div>
                        </div> :
                        <div style={{textAlign: "center", whiteSpace: "nowrap"}}>Подождите...</div>
                }
            </div>

            {
                (currentContent !== null) ?
                    <ModalCostsInfo
                        setCurrentContent={setCurrentContent}
                        currentContent={currentContent}
                    /> :
                    <ModalComponentInfo
                        show={isModalInfoShow}
                        setShow={setIsModalInfoShow}
                        content={content}
                        componentName={componentName}
                        setCurrentContent={setCurrentContent}
                    />
            }
        </div>

    );
};

export default MyAssemblyComponentCell;