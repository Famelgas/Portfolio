

import React, { useEffect, useState } from "react";
import "../css/About.css"


import Image from "./Image.js"


function About() {
  const [typedText, setTypedText] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const originalText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis gravida nisl. Aliquam tempor accumsan eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris risus, dictum ut ex bibendum, pharetra egestas sapien. Nunc bibendum mauris ac venenatis rhoncus. Proin sollicitudin est sit amet lacus euismod tempor. Nulla scelerisque imperdiet porta. Quisque id nibh magna. Suspendisse cursus feugiat nibh vitae vulputate. Vivamus mauris est, varius a placerat ac, blandit sed sem. In cursus commodo nunc, vitae porta mauris euismod nec";

  useEffect(() => {
    let currentIndex = 0;

    const addNextCharacter = () => {
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
        setTimeout(addNextCharacter, 20);
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