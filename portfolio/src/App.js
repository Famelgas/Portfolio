
import About from './components/About.js';
import {ButtonHome} from './components/Header.js'
import {ButtonAbout} from './components/Header.js'
import {ButtonPhotos} from './components/Header.js'
import React, { useState } from "react";
import './components/Image.js'
import './App.css';
import './About.css'
import './components/Home.js'
import './Home.css'
import Grid1 from './components/Grid1.js';
import Grid2 from './components/Grid2.js';
import Home from './components/Home.js';

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
                {isHomeButtonActive && <Home/>}
                
                {isAboutButtonActive && <About/>}
                {isPhotosButtonActive &&  <Grid1/>}
            </div>
            {isHomeButtonActive && <p className='Home-author'>Home Photo by João Moura</p>}
            
          

        </body>
    </div>
    
  );
}

export default App;
