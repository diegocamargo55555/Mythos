import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component, Fragment} from "react";
import imagem from "../../assets/lore.png"
import { textVide } from 'text-vide';
import "./herois.css";
import contos from '../../assets/bd/herois.json'

function AntigonaConto() {
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
    let array = contos.filter(item => item.nome === "Antígona")
    if(bionicReadingActivated){
      array[0].texto = textVide(array[0].texto);
    }

    return (
        <div id="div" class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
            <div className={isBig ? "bigText" : "smallText"}> 
              <div class="row">
                <div class="col-md-2">
                  <div className="sumario">
                  <div>1. Introdução</div>
                  <p>2 Personalidade e Aparência</p>
                  <p>3. História</p>
                  </div>
                </div>
              <div class="col-md-10">
                {array.map((item, array) => (
                  <Fragment>
                  <strong><h1>{item.nome}</h1></strong>
                  <p dangerouslySetInnerHTML={{ __html:item.texto}}></p>
                  </Fragment> 
                ))}
                <h3>Refêrencias</h3>
                {array.map((item, array) => (
                  <Fragment>
                  <p dangerouslySetInnerHTML={{ __html:item.referencias}}></p>
                  </Fragment> 
                ))}
              </div>
            </div>
          </div>
      </div>
    )
}

export default AntigonaConto;