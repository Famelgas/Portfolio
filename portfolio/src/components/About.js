

import React, { useEffect, useState } from "react";
import "../css/About.css"


import Image from "./Image.js"


function About() {
  const [typedText, setTypedText] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const originalText =
    "Este Website foi realizado com objetivo de apresentar o nosso portfolio para o Mestrado de Design e Multimedia. Aqui são encontradas uma seleção de fotos de ambos os autores que se unem não só pela cidade de Coimbra mas por todos os locais que fizeram a jornada até este ponto em que apresentamos a candidatura. Em baixo encontram-se as páginas de GitHub de cada um dos autores e o código-fonte deste Website. A foto utilizada na homepage foi tirada por João Moura. Obrigado pela atenção. \"É preciso passar sobre ruínas, Como quem vai pisando um chão de flores!\" - Antero de Quental"

  useEffect(() => {
    let currentIndex = 0;

    const addNextCharacter = () => {  //adicionar caracter um a um para atingir efeito tipo terminal
      setTypedText((prevTypedText) => {
        const nextCharacter = originalText[currentIndex];
        currentIndex++;
        if (nextCharacter !== undefined) {
          return prevTypedText + nextCharacter;
        } else {
          setShowLoading(true);
          return prevTypedText;
        }
      });

      if (currentIndex < originalText.length) {
        setTimeout(addNextCharacter, 10);
      }
    };

    addNextCharacter();

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <>
      <div className="terminal">
        <p className="text-body">
          {typedText}
          <span className="cursor">_</span>
        </p>
        {showLoading && (
          <div className="loading-container">
          <a  className="raise_link"  href="https://github.com/Famelgas/Portfolio" target="_blank" rel="noopener noreferrer">
            <h1 className="loading-title">GITHUB</h1>
            <Image name={"loading-logo"} src={require("../github-mark.png")} alt='Logo' />
          </a>
          <a  className="raise_link"  href="https://github.com/JonnyMoura" target="_blank" rel="noopener noreferrer">
              @JoaoMoura
            </a>
            <a  className="raise_link"  href="https://github.com/Famelgas" target="_blank" rel="noopener noreferrer">
              @FilipeMendes
            </a>

          </div>
          
        )}
      </div>
    </>
  );
}


export default About;