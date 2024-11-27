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
    },[]);
    useEffect(() => {
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }, [isDarkMode]);
    useEffect(() =>{
      localStorage.setItem("bigText", isBig ? "enabled" : "disabled");
    }, [isBig]);
    useEffect(() =>{
      localStorage.setItem("bionicReading", bionicReadingActivated ? "enabled" : "disabled");
    }, [bionicReadingActivated]);
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
    return (
      <div className={isDarkMode ? "dark-mode" : "body-claro"}>
        <div className={isBig ? "bigText" : "smallText"}> 
          <header>
            <h1>Opções de Acessibilidade</h1>
            Paleta de cores: atualmente utilizando {isDarkMode ? "Modo Escuro" : "Modo Claro"}        
            <button className="paletaCores" onClick={toggleDarkMode}>
            <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide(isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro") : isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}}></p>
            </button>
            <p>Aumentar Texto</p>
           <button className="tamanho" onClick={toggleBigText}>
           <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide(isBig ? "Diminuir tamanho texto" : "Aumentar tamanho texto") : isBig ? "Diminuir tamanho texto" : "Aumentar tamanho texto"}}></p>
            </button>
            <button onClick={toggleReading}>
            <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide("Desativar leitura bionica") : "Acionar leitura bionica"}}></p>
            </button>
            <p dangerouslySetInnerHTML={{ __html:bionicReadingActivated ?  textVide("Bionic Reading is a new method facilitating the reading process by guiding the eyes through text."): "sem leitura bionica"}}></p>
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
//dangerouslySetInnerHTML={{ __html:texto("Bionic Reading is a new method facilitating the reading process by guiding the eyes through text.")}