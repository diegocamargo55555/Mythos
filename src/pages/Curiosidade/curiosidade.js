import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./curiosidade.css";
import curiosidade from '../../assets/bd/curiosidade.json'
import React, { useState, useEffect, Component } from "react";
import { useInterval } from "../../components/Funcoes/useInterval";
function Curiosidade() { 
    var i = 0;
    const[texto, setTexto] = useState(curiosidade[i].descricao); // The counter
    const [count, setCount] = useState(0)
    const [delay, setDelay] = useState()
    const [isPlaying, setPlaying] = useState(false)
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
  
    useInterval(
        () => {
            setCount(count + 1)
        },
    )
    
    const handleChange = (e) => {
        setDelay(e.target.value)
    }
    if(count >= 86400000){
        setCount(0);
        i++;
        setTexto(curiosidade[i].descricao)
    }
    return (
        <>
         <div class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
            <div className={isBig ? "bigText" : "smallText"}> 
                <div className='carta'>
                <p>
                    {texto}
                </p>
            </div>
        </div>
    </div>
    </>
    )
}
export default Curiosidade;