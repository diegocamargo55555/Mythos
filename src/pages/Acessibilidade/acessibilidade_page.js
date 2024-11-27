import React, { useState, useEffect } from "react";
import "./acessibilidade.css"
import { textVide } from 'text-vide';

const Acessibilidade = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const[isBig, setisBig] = useState(false);
  
    useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "enabled") {
        setIsDarkMode(true);
      }
    }, []);
    useEffect(() =>{
      const savedMode = localStorage.getItem("bigText");
      if(savedMode == "enabled"){
        setisBig(true);
      }
    }, []);
    useEffect(() => {
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }, [isDarkMode]);
    useEffect(() =>{
      localStorage.setItem("bigText", isBig ? "enabled" : "disabled");
    }, [isBig]);
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
      window.location.reload();
    };
    const toggleBigText = () => {
      setisBig((prevMode) => !prevMode);
      window.location.reload();
    }
   
    const text =
    'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const highlightedText = textVide(text);
    return (
      <div className={isDarkMode ? "dark-mode" : "body-claro"}>
        <div className={isBig ? "bigText" : "smallText"}> 
          <header>
            <h1>{isDarkMode ? "Modo Escuro" : "Modo Claro"}</h1>
            <button onClick={toggleDarkMode}>
              Alternar para {isDarkMode ? "Modo Claro" : "Modo Escuro"}
            </button>
            <h1>Aumentar Texto</h1>
           <button onClick={toggleBigText}>
              {isBig ? "Diminuir tamanho texto" : "Aumentar tamanho texto"}
            </button>
            Leitura bionica
          </header>
          <main>
          <div>
              <p>
                  {highlightedText}
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  };
  export default Acessibilidade;
