import React, { useEffect, useState } from "react";
import "../Home.css";
import Image from "./Image.js";

function Home() {
  const [isTextBottomLoaded, setIsTextBottomLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isBottomBorderShown, setIsBottomBorderShown] = useState(false);
  const [isTextTopLoaded, setIsTextTopLoaded] = useState(false);

  useEffect(() => {
    // Simulating bottom text loading
    setTimeout(() => {
      setIsTextBottomLoaded(true);
    }, 0);

    // Simulating bottom border loading after bottom text loaded
    setTimeout(() => {
      setIsBottomBorderShown(true);
    }, 2000); // Increased delay to make it appear after text bottom

    // Simulating image loading after bottom border loaded
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 2500); // Increased delay to make it slower

    // Simulating top text loading after image and bottom border loaded
    setTimeout(() => {
      setIsTextTopLoaded(true);
    }, 8000); // Increased delay to make it appear after image and bottom border
  }, []);

  return (
    <div className="animated-title">
      <div className={`text-bottom ${isTextBottomLoaded ? "loaded" : ""}`}>
        <div>Welcome to our portfolio</div>
      </div>
      <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
        <Image
          name={"home-photo"}
          src={require("../images/IMG_0937.jpg")}
          alt="Home-photo"
        />
      </div>
      <div className={`text-top ${isTextTopLoaded ? "loaded" : ""}`}>
        {isBottomBorderShown && <div className="bottom-border" />}
        <div>All work developed by João Moura & Filipe Mendes</div>
      </div>
    </div>
  );
}

export default Home;
