import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component} from "react";
import imagem from "../../assets/lore.png"
import { textVide } from 'text-vide';
import fatoOuMito from '../../assets/bd/fatoOuMito.json'
import "./fatoOuMito.css"

class FatoOuMito extends Component {
  constructor(props){
    super(props);
    this.state = {
      i: 1,
      texto: fatoOuMito[0],
      perder: false,
      numMax: 2,
      isDarkMode: localStorage.getItem("darkMode"),
      isBigText: localStorage.getItem("bigText"),
      isBionic: localStorage.getItem("bioniReading")
    }
      const setIsDarkMode = false;
      this.buttonFato = this.buttonFato.bind(this);
      this.buttonMito = this.buttonMito.bind(this);
      this.buttonResetar = this.buttonResetar.bind(this);
    }
    pegarTexto(i) {
      let array = fatoOuMito[i];
      return array; 
    }
     buttonFato = () =>{
      var aux = this.state.texto.fatoMito;
      if(aux == "mito"){
        this.setState({
          perder: true
        })
          this.perder = true;
        } else{
          var auxi = this.state.i;
          auxi++;
            this.setState({
              i : this.state.i + 1,
              texto: this.pegarTexto(this.state.i)
            });
        }
    }
    buttonMito = () =>{
      var aux = this.state.texto.fatoMito;
      if(aux == "fato"){
        this.setState({
          perder: true
        })
          this.perder = true;
        } else{
          var auxi = this.state.i;
          auxi++;
            this.setState({
              i : this.state.i + 1,
              texto: this.pegarTexto(this.state.i)
            });
        }
    };
    buttonResetar = () =>{
      this.setState({
        i: 1,
        texto: fatoOuMito[0],
        perder: false,
        numMax: 2
      })
    }
    render(){
      if(this.state.perder == true)
      {
        return(
          <div className={this.state.isDarkMode == "enabled" ? "dark-mode" : "body-claro"}>
            <h4 className="margem"> PONTUACAO FINAL: {this.state.i - 1}</h4>      
            <div className="texto">
              <p>VOCE PERDEU D:</p>
              <button className="erro" onClick={this.buttonResetar}>JOGAR NOVAMENTE?</button>
            </div>
          </div>
        );
      }else{
        if(this.state.i > this.state.numMax){
          return(
            <div className={this.state.isDarkMode == "enabled" ? "dark-mode" : "body-claro"}>
              <h4 className="margem"> PONTUACAO FINAL: {this.state.i - 1}</h4>      
              <div className="texto">
            <p>VOCE VENCEU :DD!</p>
            <button className="acerto" onClick={this.buttonResetar}>JOGAR NOVAMENTE?</button>
            </div>
            </div>
          );
        } else{
          return (
            <div className={this.state.isDarkMode == "enabled" ? "dark-mode" : "body-claro"}>
              <div className="carta">
                <h4>PONTUACAO: {this.state.i - 1}</h4>          
                <p className="texto">{this.state.texto.nome}</p>
              <p className="texto">{this.state.texto.descricao}</p>
              </div>
                <button className="botao1" onClick={this.buttonMito}>MITO</button>
                <button className="botao2" onClick={this.buttonFato}>FATO</button>
  
            </div>
          );
        }
      }
  }
}

export default FatoOuMito;