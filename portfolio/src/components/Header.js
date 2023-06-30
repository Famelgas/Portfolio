import * as React from "react";
  
export default function Header() {
    return (
        <header className="App-header">
            <h1>Portfolio</h1>
            <div className="header_buttons">
                <ButtonHome/>
                <ButtonAbout/>
                <ButtonPhotos/>
            </div>
        </header>

    );
}

export function ButtonHome() {
    const [isActive, setIsActive] = React.useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };
    
    return (
        <button onClick={handleButtonClick}>
            Home
        </button>
    );
}


export function ButtonAbout() {
    const [isActive, setIsActive] = React.useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button onClick={handleButtonClick}>
            About
        </button>
    );
}

export function ButtonPhotos() {
    const [isActive, setIsActive] = React.useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button onClick={handleButtonClick}>
            Photos
        </button>
    );
}

