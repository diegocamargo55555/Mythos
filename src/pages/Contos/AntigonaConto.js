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
      array[0].texto = textVide(array[0].texto);
      for(var i = 0; i < array[0].subtitulos.length; i++){
        array[0].subtitulos[i] = textVide(array[0].subtitulos[i]);
      }
    }
  

    return (
        <div class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
            <div className={isBig ? "bigText" : "smallText"}> 
              <div class="row">
                <div class="col-md-2">
                  <div className="sumario">
                  {array.map(({array, subtitulos}) => (
                        <div key={subtitulos} className="row">
                            <p dangerouslySetInnerHTML={{ __html: subtitulos}}></p>
                        </div>
                    ))}
                  </div>
                  </div>
                  <div class="col-md-10">
                {array.map((item, array) => (
                  <Fragment>
                  <strong><h1>{item.nome}</h1></strong>
                  <p dangerouslySetInnerHTML={{ __html:item.texto}}></p>
                  </Fragment> 
                ))}
                </div>
              </div>
            </div>
        </div>
    )
}

export default AntigonaConto;