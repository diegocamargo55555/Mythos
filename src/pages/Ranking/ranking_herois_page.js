import { Post } from "./ranking"
import React, { useState, useEffect} from "react";
import Heroi from "../../assets/bd/herois.json"
import "./ranking.css"

export default function Ranking_herois() {
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
            {Heroi.map((post) => {
                return (
                    <Post paginaNome={post.paginaNome} nome={post.nome} qntAcessos={post.qntAcessos} resumo={post.resumo} imagem={post.imagem}/>
                )})}
            </div>
        </div>
    )
}