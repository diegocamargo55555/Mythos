import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component} from "react";
import imagem from "../../assets/lore.png"
import { textVide } from 'text-vide';
import fatoOuMito from '../../assets/bd/fatoOuMito.json'


class FatoOuMito extends Component {
  constructor(props){
    super(props);
    this.state = {
      i: 1,
      texto: fatoOuMito[0],
    }
      var proximo = true;
      var perder = false;
      var pontuacao = 0;
      this.buttonFato = this.buttonFato.bind(this);
      this.buttonMito = this.buttonMito.bind(this);
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
    render(){
      if(this.state.perder == true)
      {
        return(
          <div>
            VOCE PERDEU D:
          </div>
        );
      }else{
        return (
          <div>      
            <p>PONTUACAO: {this.state.i - 1}</p>          
            <div>{this.state.texto.nome}</div>
            <button onClick={this.buttonMito}>MITO</button>
            <button onClick={this.buttonFato}>FATO</button>
          </div>
        );
      }
  }
}

export default FatoOuMito;