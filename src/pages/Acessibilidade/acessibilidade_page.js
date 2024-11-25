import React, { useState, useEffect } from "react";
import "./acessibilidade.css"

const Acessibilidade = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "enabled") {
        setIsDarkMode(true);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }, [isDarkMode]);
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
      window.location.reload();
    };
    return (
      <div className={isDarkMode ? "dark-mode" : ""}>
        <div>
          <header>
            <h1>{isDarkMode ? "Modo Escuro" : "Modo Claro"}</h1>
            <button onClick={toggleDarkMode}>
              Alternar para {isDarkMode ? "Modo Claro" : "Modo Escuro"}
            </button>
          </header>
          <main>
            <p>Este é um exemplo de alternância entre modos kkkkkkkkkkkkkkkkkkkkk esse é bom.</p>
            
            a
          </main>
        </div>
      </div>
    );
  };
  export default Acessibilidade;
