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
            <div className="colunaTexto">
              <div class="row">
                <div class="col-md-2">
                  <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide("Alterar paleta de cores") : "Alterar paleta de cores"}}></p> 
                </div>
                <div class="col-md-auto">
                  <button className="paletaCores botao" onClick={toggleDarkMode}>
                  <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide(isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro") : isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}}></p>
                  </button>
                </div>
              </div>
            </div>
            <p></p>
            <div className="colunaTexto">
              <div class="row">
                <div class="col-md-2">
                  <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide("Alterar tamanho texto") : "Alterar tamanho texto"}}></p>
                </div>
              <div class="col-md-auto">
                  <button className="tamanho botao" onClick={toggleBigText}>
                  <p dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide(isBig ? "Diminuir tamanho texto" : "Aumentar tamanho texto") : isBig ? "Diminuir tamanho texto" : "Aumentar tamanho texto"}}></p>
                </button>
                </div>
              </div>
            </div>
            <p></p>
            <div className="colunaTexto">
              <div class="row">
                <div class="col-md-2">
                  <p dangerouslySetInnerHTML={{ __html:bionicReadingActivated ?  textVide("A leitura bionica acelera a assimiliação e leitura do texto.") : "A leitura bionica acelera a assimiliação e leitura do texto."}}></p>
                </div>
                <div class="col-md-auto">
                  <button className="botao" onClick={toggleReading}>
                    <p dangerouslySetInnerHTML={{ __html:bionicReadingActivated ?  textVide("Desativar leitura bionica."): "Acionar leitura bionica"}}></p>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main>
          </main>
        </div>
      </div>
    );
  };
  export default Acessibilidade;
//dangerouslySetInnerHTML={{ __html:texto("Bionic Reading is a new method facilitating the reading process by guiding the eyes through text.")}