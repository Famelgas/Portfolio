
import { About } from './components/core.js';
import {ButtonHome} from './components/Header.js'
import {ButtonAbout} from './components/Header.js'
import {ButtonPhotos} from './components/Header.js'
import React, { useState } from "react";
import './components/core.js'
import './App.css';
import './Core.css'

function App() {
  const [isHomeButtonActive, setIsHomeButtonActive] = useState(false);
  const [isAboutButtonActive, setIsAboutButtonActive] = useState(false);
  const [isPhotosButtonActive, setIsPhotosButtonActive] = useState(false);

  const handleHomeButtonClick = () => {
    setIsHomeButtonActive(true);
    setIsAboutButtonActive(false);
    setIsPhotosButtonActive(false);
  };

  const handleAboutButtonClick = () => {
    setIsHomeButtonActive(false);
    setIsAboutButtonActive(true);
    setIsPhotosButtonActive(false);
  };

  const handlePhotosButtonClick = () => {
    setIsHomeButtonActive(false);
    setIsAboutButtonActive(false);
    setIsPhotosButtonActive(true);
  };

  return (
    <div className="App">
        <header className="App-header">
            <h1 className='App_title'>PORTFOLIO</h1>
            <div className="header_buttons">
                <ButtonHome 
                isActive={isHomeButtonActive}
                onClick={handleHomeButtonClick}
                />
                <ButtonAbout 
                isActive={isAboutButtonActive}
                onClick={handleAboutButtonClick}
                />
                <ButtonPhotos 
                isActive={isPhotosButtonActive}
                onClick={handlePhotosButtonClick}
                />
            </div>
        </header>
        <body>
            <div>
                {isHomeButtonActive && <p>casinha</p>}
                {isAboutButtonActive && <About/>}
                {isPhotosButtonActive &&  <div className="container">
                <div class="item item-1">1</div>
                <div class="item item-2">2</div>
                <div class="item item-3">3</div>
            </div>}
            </div>
            
            
          

        </body>
    </div>
    
  );
}

export default App;
