import { Post } from "./ranking"
import React, { useState, useEffect } from "react";
import Contos from "../../assets/bd/contos.json"
import "./ranking.css"

export default function Ranking() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isBig, setisBig] = useState(false);
    const [bionicReadingActivated, setReading] = useState(false);
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "enabled") {
            setIsDarkMode(true);
        }
    }, []);
    useEffect(() => {
        const savedMode = localStorage.getItem("bigText");
        if (savedMode == "enabled") {
            setisBig(true);
        }
    }, []);
    useEffect(() => {
        const savedMode = localStorage.getItem("bionicReading");
        if (savedMode == "enabled") {
            setReading(true);
        }
    }, []);

    return (
        <div>
            <div class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
                <div className={isBig ? "bigText" : "smallText"}>
                    <Post paginaNome={Contos[0].paginaNome} nome={Contos[0].nome} qntAcessos={Contos[0].qntAcessos} resumo={Contos[0].resumo} imagem={Contos[0].imagem} />
                    <Post paginaNome={Contos[1].paginaNome} nome={Contos[1].nome} qntAcessos={Contos[1].qntAcessos} resumo={Contos[1].resumo} imagem={Contos[1].imagem} />
                </div>
            </div>
        </div>
    )
}