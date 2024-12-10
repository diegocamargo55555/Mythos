import { Post } from "./ranking"
import React from "react";
import Heroi from "../../assets/bd/herois.json"
import "./ranking.css"

export default function Ranking_herois() {
    return (
        <div className="paddingLeft">
            {Heroi.map((post) => {
                return (
                    <Post paginaNome={post.paginaNome} nome={post.nome} qntAcessos={post.qntAcessos} resumo={post.resumo} imagem={post.imagem}/>
                )})}
        </div>
    )
}