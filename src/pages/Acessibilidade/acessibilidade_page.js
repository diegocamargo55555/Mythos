import React, { useState, useEffect } from "react";
import "./acessibilidade.css"
import { textVide } from 'text-vide';

const Acessibilidade = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const[isBig, setisBig] = useState(false);
    const[bionicReadingActivated, setReading] = useState(false);
  
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
    useEffect(() =>{
      const savedMode = localStorage.getItem("bionicReading");
      if(savedMode == "enabled"){
        setReading(true);
      }
    },[bionicReadingActivated]);
    useEffect(() => {
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }, [isDarkMode]);
    useEffect(() =>{
      localStorage.setItem("bigText", isBig ? "enabled" : "disabled");
    }, [isBig]);
    useEffect(() =>{
      localStorage.setItem("bionicReading", bionicReadingActivated ? "enabled" : "disabled");
    });
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
      window.location.reload();
    };
    const toggleBigText = () => {
      setisBig((prevMode) => !prevMode);
      window.location.reload();
    }
    const toggleReading = () => {
      setReading((prevMode) => !prevMode);
      window.location.reload();
    }
    const texto = (text) => {
      const highlightedText = textVide(text);
      return highlightedText
    }
      
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
            <button onClick={toggleReading}>
              Acionar leitura bionica;
            </button>
            <p dangerouslySetInnerHTML={{ __html:texto("Bionic Reading is a new method facilitating the reading process by guiding the eyes through text.")}}></p>
          </header>
          <main>
          <div>
            </div>
          </main>
        </div>
      </div>
    );
  };
  export default Acessibilidade;
