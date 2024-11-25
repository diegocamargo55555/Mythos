import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./styles";
import React, { useState, useEffect, Component } from "react";
import imagem from "../../assets/lore.png"
import "./home.css"

function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "enabled") {
        setIsDarkMode(true);
      }
    }, []);
    
    return (
        <div class="container" className={isDarkMode ? 'body-dark-mode' : "body"}>
            <Title> Bem vindo à página HOME</Title>

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


    )
}

export default Home;