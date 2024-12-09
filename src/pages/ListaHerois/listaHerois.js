import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component, Fragment} from "react";
import imagem from "../../assets/lore.png"
import { textVide } from 'text-vide';
import herois from '../../assets/bd/herois.json'
import "./listaHerois.css"


function Home() {
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
  
    return (
        <div class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
            <div className={isBig ? "bigText" : "smallText"}> 
            <h4 dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide("Lista de Contos: ") : "Lista de Contos: "}}></h4>
            {herois.map((item, contos) => (
                  <Fragment>
                    <div className="caixaLink">
                        <strong><a className="a" href={item.paginaNome}>{item.nome}</a></strong>
                        <hr className='hr'/>
                        <p dangerouslySetInnerHTML={{ __html:item.resumo}}></p>
                    </div>
                  </Fragment> 
                ))}
            </div>
        </div>
    )
}

export default Home;