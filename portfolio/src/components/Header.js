import React from "react";


export function ButtonHome({ isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`raise${isActive ? ' clicked' : ''}`}
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
  return (
    <button
      onClick={onClick}
      className={`raise${isActive ? ' clicked' : ''}`}
    >
      Photos
    </button>
  );
}



