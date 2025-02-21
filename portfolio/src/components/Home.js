import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Image from "./Image.js";

function Home() {
  const [isTextBottomLoaded, setIsTextBottomLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isBottomBorderShown, setIsBottomBorderShown] = useState(false);
  const [isTextTopLoaded, setIsTextTopLoaded] = useState(false);

  useEffect(() => {
    // Simula o bottomText a carregar
    setTimeout(() => {
      setIsTextBottomLoaded(true);
    }, 0);

    // Simula borda de baixo a carregar após texto
    setTimeout(() => {
      setIsBottomBorderShown(true);
    }, 2000); // Delay para carregar no momento certo

    // Simula imagem carregar depois do texto
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 2500); 

    // Simula o top text ser carregado após imagem e bottom text
    setTimeout(() => {
      setIsTextTopLoaded(true);
    }, 8000); // Delay para carregar no momento certo
  }, []);

  return (
    <div className="animated-title">
      <div className={`text-bottom ${isTextBottomLoaded ? "loaded" : ""}`}>
        <div>Welcome to our portfolio</div>
      </div>
      <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
        <Image
          name={"home-photo"}
          src={require("../images/filipe/photo5.jpg")}
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
