import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component, Fragment} from "react";
import imagem from "../../assets/lore.png"
import { textVide } from 'text-vide';
import "./contos.css";
import contos from '../../assets/bd/contos.json'

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
      for(var i = 0; i < array[0].quantidadeParagrafos; i++){
        array[0].texto[i] = textVide(array[0].texto[i]);
      }
    }
    return (
        <div class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
            <div className={isBig ? "bigText" : "smallText"}> 
            {array.map((item, array) => (
              <Fragment>
              <strong><h1>{item.nome}</h1></strong>
              </Fragment> 
            ))}
            {array.map(({ array, texto }) => (
              <div key={texto}>
                    <p dangerouslySetInnerHTML={{ __html:texto}}></p>
                  </div>
            ))}
            </div>
        </div>
    )
}

export default AntigonaConto;