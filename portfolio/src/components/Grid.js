import React, { useState, useEffect } from "react";
import '../App.css';

import Image from './Image.js';


function Grid(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState("");
  
    const handleClick = (src) => {
        setShowPopup(true);
        setPopupImageSrc(src);
        props.onPopupStateChange(true);
    };
  
    const closePopup = () => {
        setShowPopup(false);
        setPopupImageSrc("");
        props.onPopupStateChange(false);
    };

    return(
            
        <div className="container">
            <div className="gallery-container w-2 h-2">
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_2609.jpg"))}>
                    <Image name={"photo1"} src={require("../images/DSC_2609.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-3 h-3">
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_1723.jpg"))}>
                    <Image name={"photo2"} src={require("../images/DSC_1723.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            
            <div className="gallery-container w-4 h-2" >
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_2087.jpg"))}>
                    <Image name={"photo3"} src={require("../images/DSC_2087.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-3 h-1">
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_2256.jpg"))}>
                    <Image name={"photo4"} src={require("../images/DSC_2256.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-1 h-3">
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_2341.jpg"))}>
                    <Image name={"photo5"} src={require("../images/DSC_2341.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-2 h-2">
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_2500.jpg"))}>
                    <Image name={"photo6"} src={require("../images/DSC_2500.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-4 h-5">
                <div className="gallery-item" onClick={() => handleClick(require("../images/DSC_3023.jpg"))}>
                    <Image name={"photo7"} src={require("../images/DSC_3023.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>


            {showPopup && (
                <div className="popup">
                    <span onClick={closePopup}>&times;</span>
                    <img src={popupImageSrc} alt="Popup Photo" />
                </div>
            )}



        </div>

    )
}

export default Grid;
