import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./styles";
import React, { useState, useEffect} from "react";
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
            <div className="seperacaoColunas">
                <div class="row">
                    <div class="col-md-2">
                    <h1><a href="Fato-Ou-Mito" className="a-Home">Fato</a></h1> 
                        <h1><a href="Fato-Ou-Mito" className="a-Home">Vs</a> </h1>
                        <h1><a href="Fato-Ou-Mito" className="a-Home">Mito</a></h1>
                    </div>
                    <div class="col-md-10">
                        <h6>Teste seu conhecimentos sobre a Grécia antiga com esse jogo!</h6>
                        <p>Escolha se algo é um mito ou fato, e cheque se isto está correto</p>
                        <p>Tente conseguir a maior pontuação possível!</p>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-10">
                    <h6 className="direita">Veja uma lista de Contos disponiveis em nosso site!</h6>
                    <p className="direita">Escolha seu favorito, ou descubra algo novo!</p>
                </div>
                <div class="col-md-2">
                   <h1><a className="a-Home" href="Lista-Contos">Lista</a></h1>
                   <h1><a className="a-Home" href="Lista-Contos">De</a></h1>
                   <h1><a className="a-Home" href="Lista-Contos">Contos</a></h1>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-2">
                    <h1><a className="a-Home" href="Lista-Herois">Lista</a></h1>
                    <h1> <a className="a-Home" href="Lista-Herois">de</a></h1> 
                    <h1><a className="a-Home" href="Lista-Herois">Heróis</a></h1>
                </div>
                <div class="col-md-10">
                    <p>Veja uma lista de heróis disponíveis em nosso site</p> 
                    <p>Escolha alguém familiar, ou descubra alguém novo!</p>
                    </div>
                <br/>
            </div>
            </div>
        </div>
    )
}

export default Home;