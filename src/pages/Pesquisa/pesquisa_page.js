import contos from '../../assets/bd/contos.json'
import herois from '../../assets/bd/herois.json'

import React, { useState, useEffect} from "react";
import "./pesquisa.css"

function Pesquisa() {
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
    const [query, setQuery] = useState("");
    return (
      <div class="container" className={isDarkMode ? 'dark-mode' : "body-claro"}>
            <div className={isBig ? "bigText" : "smallText"}> 
        <div className="container">
          
            <form>
                <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)} />
            </form>
            <div className="search-results">
                <ul>
                    {contos.filter((user) => user.nome.toLocaleLowerCase().includes(query)).map((user) => (
                        <li key={user.nome} className='listItem'><a className="a" href={user.paginaNome}>{user.nome}</a></li>
                    ))}

                    {herois.filter((user) => user.nome.toLocaleLowerCase().includes(query)).map((user) => (
                        <li key={user.nome} className='listItem'><a className="a" href={user.paginaNome}>{user.nome}</a></li>
                    ))}
                </ul>
            </div>
            </div></div>
        </div>
    )
}

export default Pesquisa;
