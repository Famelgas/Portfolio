import * as React from "react";
  
export default function Header() {
    const [home_button, setHomeButton] = React.useState(false);
    const [about_button, setAboutButton] = React.useState(false);
    const [photos_button, setPhotosButton] = React.useState(false);

    const updateHomeButton = (updated_home_button) => {
        setHomeButton(updated_home_button);
      };

    return (
        <header className="App-header">
            <h1>Portfolio</h1>
            <div className="header_buttons">
                <ButtonHome home_button={home_button} updated_home_button={updateHomeButton} />
                <ButtonAbout/>
                <ButtonPhotos/>
            </div>
        </header>

    );
}

export function ButtonHome(props) {
    const { home_button, updateHomeButton } = props;
    const [isActive, setIsActive] = React.useState(false);

    const handleButtonClick = () => {
        const updated_home_button = !home_button;
        updateHomeButton(updated_home_button)
        setIsActive(!isActive);
    };
    
    return (
        <button onClick={handleButtonClick}>
            {home_button ? "Home" : "not Home"}
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

