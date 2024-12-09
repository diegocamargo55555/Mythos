import { Post } from "./ranking"
import React from "react";
import Contos from "../../assets/bd/contos.json"

//https://akhtarvahid.hashnode.dev/how-to-access-local-json-file-to-react


import "./ranking.css"




export default function Ranking_herois() {




    return (
        <div className="paddingLeft">
            <Post nome={Contos[0].nome} qntAcessos={Contos[0].qntAcessos} resumo={Contos[0].resumo} imagem={Contos[0].imagem}/>
            <Post nome={Contos[1].nome} qntAcessos={Contos[1].qntAcessos} resumo={Contos[1].resumo} imagem={Contos[1].imagem}/>

        </div>
    )
}


