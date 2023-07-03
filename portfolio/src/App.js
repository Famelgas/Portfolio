import logo from './components/logo.svg';

import {ButtonHome} from './components/Header.js'
import {ButtonAbout} from './components/Header.js'
import {ButtonPhotos} from './components/Header.js'
import React, { useState } from "react";
import './components/Image.js'
import './App.css';

import Grid1 from './components/Grid1.js';
import Grid2 from './components/Grid2.js';

function App(props) {
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
                {isAboutButtonActive && <p>sobrenos</p>}
                {isPhotosButtonActive && <p>fototeta</p>}
            </div>
            <p>Portfólio de fotografia</p>
            
            <Grid1 />
            

        </body>
    </div>
    
  );
}

export default App;
