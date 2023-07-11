import React from "react";
import { useState } from 'react';


export function ButtonHome({ isActive, onClick }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
    window.scrollTo({
      top: 0,
    });

    // Call the onClick function passed as a prop
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

  const handleClick = () => {
    setButtonClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Call the onClick function passed as a prop
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



