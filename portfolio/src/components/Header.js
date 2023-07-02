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



/* removi a funçao header porque dado que o html ja tem a tag header nao faz sentido estar a complicar dado que necessitamos de guardar o estado dos botoes. Optei por fazer a relação de herança do componente 'App' diretamente com os botoes*/