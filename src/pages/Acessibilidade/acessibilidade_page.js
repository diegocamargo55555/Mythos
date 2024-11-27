import React, { useState, useEffect } from "react";
import "./acessibilidade.css"

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
                  Acessibilidade
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  };
  export default Acessibilidade;
