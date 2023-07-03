import React from "react";
import '../App.css';

import Image from './Image.js';

function Grid1() {
    return(
        <div className="container1">
                <div class="item item1-1">
                    <Image name={"photo1"} src={require("../images/DSC_2609.jpg")} alt='Photo' />
                </div>
                <div class="item item1-2">
                    <Image name={"photo2"} src={require("../images/DSC_1723.jpg")} alt='Photo' />
                </div>
                <div class="item item1-3">3</div>
                <div class="item item1-4">4</div>
                <div class="item item1-5">5</div>
                <div class="item item1-6">6</div>
                <div class="item item1-7">7</div>
                <div class="item item1-8">8</div>
                <div class="item item1-9">9</div>
                <div class="item item1-10">10</div>
                <div class="item item1-11">11</div>
                <div class="item item1-12">12</div>
                <div class="item item1-13">13</div>
                <div class="item item1-14">14</div>
                <div class="item item1-15">15</div>
                <div class="item item1-16">16</div>
                <div class="item item1-17">17</div>
                <div class="item item1-18">18</div>
                <div class="item item1-19">19</div>
                <div class="item item1-20">20</div>
            </div>

    )
}

export default Grid1;
