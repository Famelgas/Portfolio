import React from "react";
import '../App.css';

import Image from './Image.js';

function Grid1() {
    return(
            
        <div className="container">
            <div className="gallery-container w-2 h-2">
                <div className="gallery-item">
                    <Image name={"photo1"} src={require("../images/DSC_2609.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-3 h-3">
                <div className="gallery-item">
                    <Image name={"photo2"} src={require("../images/DSC_1723.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            
            <div className="gallery-container w-4 h-2">
                <div className="gallery-item">
                    <Image name={"photo3"} src={require("../images/DSC_2087.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-3 h-1">
                <div className="gallery-item">
                    <Image name={"photo4"} src={require("../images/DSC_2256.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-1 h-3">
                <div className="gallery-item">
                    <Image name={"photo5"} src={require("../images/DSC_2341.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-2 h-2">
                <div className="gallery-item">
                    <Image name={"photo6"} src={require("../images/DSC_2500.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>
            <div className="gallery-container w-4 h-5">
                <div className="gallery-item">
                    <Image name={"photo7"} src={require("../images/DSC_3023.jpg")} alt='Photo' />
                    <div class="text">Filipe Mendes</div>
                </div>
            </div>

            
            <div className="popup">
                <span>&times;</span>
                <Image name={"photo1"} src={require("../images/DSC_2609.jpg")} alt='Photo' />
                <div class="text">Filipe Mendes</div>
            </div>


            <script>
                document.querySelectorAll(".gallery-container .gallery-item Image img").forEach(image => {
                    Image.image.onClick = () => {
                        document.querySelector(".popup").style.display = "block";
                        document.querySelector(".popup img").src = Image.image.getAttribute("src");
                    } 
                });
            </script>

        </div>


    
        

    )
}

export default Grid1;
