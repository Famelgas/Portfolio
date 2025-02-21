import React, { useState, useEffect } from "react";
import '../css/Grid.css';

import Image from './Image.js';

/**
 * Grid assimétrica que mostra as fotografias
 * O container global é a grid, os containers gallery-container definem os espaços das fotos,
 * os containers gallery tratam dos clicks sobre as imagens
 * 
 * @param {*} props 
 * @returns 
 */
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
            <div className="gallery-container w-2 h-5">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo1.jpg"))}>
                    <Image name={"photo1"} src={require("../images/filipe/photo1.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo9.jpg"))}>
                    <Image name={"photo9"} src={require("../images/filipe/photo9.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo2.jpg"))}>
                    <Image name={"photo2"} src={require("../images/filipe/photo2.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            
            <div className="gallery-container w-2 h-3" >
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo3.jpg"))}>
                    <Image name={"photo3"} src={require("../images/filipe/photo3.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-5">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo5.jpg"))}>
                    <Image name={"photo5"} src={require("../images/filipe/photo5.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo6.jpg"))}>
                    <Image name={"photo6"} src={require("../images/filipe/photo6.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo8.jpg"))}>
                    <Image name={"photo8"} src={require("../images/filipe/photo8.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            
            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo10.jpg"))}>
                    <Image name={"photo10"} src={require("../images/filipe/photo10.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-3">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo11.jpg"))}>
                    <Image name={"photo11"} src={require("../images/filipe/photo11.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-5">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo15.jpg"))}>
                    <Image name={"photo15"} src={require("../images/filipe/photo15.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-3">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo13.jpg"))}>
                    <Image name={"photo13"} src={require("../images/filipe/photo13.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-2">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo12.jpg"))}>
                    <Image name={"photo12"} src={require("../images/filipe/photo12.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo14.jpg"))}>
                    <Image name={"photo14"} src={require("../images/filipe/photo14.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo19.jpg"))}>
                    <Image name={"photo19"} src={require("../images/filipe/photo19.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo7.jpg"))}>
                    <Image name={"photo7"} src={require("../images/filipe/photo7.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-4 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo20.jpg"))}>
                    <Image name={"photo20"} src={require("../images/filipe/photo20.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-3">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo16.jpg"))}>
                    <Image name={"photo16"} src={require("../images/filipe/photo16.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            <div className="gallery-container w-2 h-3">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo18.jpg"))}>
                    <Image name={"photo18"} src={require("../images/filipe/photo18.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            
            <div className="gallery-container w-2 h-5">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo4.jpg"))}>
                    <Image name={"photo4"} src={require("../images/filipe/photo4.jpg")} alt='Photo' onClick={handleClick} />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>


            <div className="gallery-container w-2 h-4">
                <div className="gallery-item" onClick={() => handleClick(require("../images/filipe/photo17.jpg"))}>
                    <Image name={"photo17"} src={require("../images/filipe/photo17.jpg")} alt='Photo' onClick={handleClick} />
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
