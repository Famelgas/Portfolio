import logo from './components/logo.svg';

import {ButtonHome} from './components/Header.js'
import {ButtonAbout} from './components/Header.js'
import {ButtonPhotos} from './components/Header.js'
import React, { useState } from "react";
import './components/core.js'
import './App.css';

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
        <h1>Portfolio</h1>
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
      <div>
        {isHomeButtonActive && <p>casinha</p>}
        {isAboutButtonActive && <p>sobrenos</p>}
        {isPhotosButtonActive && <p>fototeta</p>}
      </div>

      <p>Portfólio de fotografia</p>
    </div>
  );
}

export default App;
