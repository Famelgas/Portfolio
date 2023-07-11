import React from "react";
import { useState } from 'react';


export function ButtonHome({ isActive, onClick }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {//Regressa sempre ao topo
    setButtonClicked(true);
    window.scrollTo({
      top: 0,
    });

   
    if (onClick) {
      onClick();
    }

    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`raise${isActive ? ' clicked' : ''}${buttonClicked ? ' clicked' : ''}`}
    >
      Home
    </button>
  );
}

export function ButtonAbout({ isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`raise${isActive ? ' clicked' : ''}`}
    >
      About
    </button>
  );
}

export function ButtonPhotos({ isActive, onClick }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => { //regressa sempre ao topo
    setButtonClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

   
    if (onClick) {
      onClick();
    }

    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`raise${isActive ? ' clicked' : ''}${buttonClicked ? ' clicked' : ''}`}
    >
      Photos
    </button>
  );
}



