import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./styles";
import React, { useState, useEffect, Component } from "react";
import imagem from "../../assets/lore.png"
import "./home.css"
import { textVide } from 'text-vide';

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
            <Title> Boas-Vindas a Mythos!</Title>
            <h4 dangerouslySetInnerHTML={{ __html: bionicReadingActivated ? textVide("Aqui estão algumas das coisas que você pode acessar aqui!") : "Aqui estão algumas das coisas que você pode acessar aqui!"}}></h4>
            <div class="row">
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200"/>
                </div>
                <div class="col-md-10">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-10">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200"/>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200"/>
                </div>
                <div class="col-md-10">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                    Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque. 
                    Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
                <br/>
            </div>
            </div>
        </div>
    )
}

export default Home;