import { Post } from "./ranking"
import React from "react";
import Contos from "../../assets/bd/contos.json"
import "./ranking.css"

export default function Ranking() {
    return (
        <div className="paddingLeft">
            <Post paginaNome={Contos[0].paginaNome} nome={Contos[0].nome} qntAcessos={Contos[0].qntAcessos} resumo={Contos[0].resumo} imagem={Contos[0].imagem}/>
            <Post paginaNome={Contos[1].paginaNome} nome={Contos[1].nome} qntAcessos={Contos[1].qntAcessos} resumo={Contos[1].resumo} imagem={Contos[1].imagem}/>
            

        </div>
    )
}


