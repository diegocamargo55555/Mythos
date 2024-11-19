import React, { useState, useEffect } from "react";
import "./acessibilidade.css"

const Acessibilidade = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Carregar preferência do modo escuro ao montar o componente
    useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "enabled") {
        setIsDarkMode(true);
      }
    }, []);
  
    // Atualizar o localStorage sempre que o estado mudar
    useEffect(() => {
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <div className={isDarkMode ? "dark-mode" : ""}>
        <header>
          <h1>{isDarkMode ? "Modo Escuro" : "Modo Claro"}</h1>
          <button onClick={toggleDarkMode}>
            Alternar para {isDarkMode ? "Modo Claro" : "Modo Escuro"}
          </button>
        </header>
        <main>
          <p>Este é um exemplo de alternância entre modos kkkkkkkkkkkkkkkkkkkkk esse é bom.</p>
        </main>
      </div>
    );
  };
  export default Acessibilidade;
