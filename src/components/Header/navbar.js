import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css";
import { Titulo } from "./header";
import React, { useState, useEffect, Component } from "react";
import '../.././pages/Acessibilidade/acessibilidade_page.js';
import '../../pages/Ranking/ranking_page.js';

function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const[carregado, setCarregado] = useState(false);
    useEffect(() =>{
      const savedMode = localStorage.getItem("carregado");
      if(savedMode === "enabled"){
        setCarregado(true);
      }
    })
    useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "enabled") {
        setIsDarkMode(true);
      }
    }, []);
    window.onbeforeunload = function(e) {
        window.localStorage.setItem("current-url", window.location.href);
    };
    localStorage.setItem("carregado", "disabled");
    if(window.location.pathname == '/' ){
        
        return(
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Jim+Nightshade&display=swap" rel="stylesheet"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Jim+Nightshade&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

            <body className={isDarkMode ? "body background-dark" : "body background-claro"}>
                <nav class="navbar navbar-expand-sm">
                    <div class="container-fluid"className={isDarkMode ? "header-modoescuro" : "header"}>
                        <Link class="navbar-brand" to='/' className="titulo"><Titulo>Mythos</Titulo></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to='/Acessibilidade'><p className="items acessibilidade">Acessibilidade</p></Link>
                                </li>
                                <NavDropdown title="Lista" id="basic-nav-dropdown" className="items lista">
                                    <NavDropdown.Item href="Ranking">Ranking</NavDropdown.Item>
                                    <NavDropdown.Item href="Lista-Contos">
                                        Lista de Contos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to='/Pesquisa'><p className="items pesquisa">Pesquisa</p></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </body>
        </header>
        )
    } else{
        return(
            <header>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Jim+Nightshade&display=swap" rel="stylesheet"/>
    
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Jim+Nightshade&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    
                <body className={isDarkMode ? "body background-dark" : "body background-claro"}>
                    <nav class="navbar navbar-expand-sm">
                        <div class="container-fluid"className={isDarkMode ? "header-modoescuro" : "header"}>
                            <Link class="navbar-brand" to='/' className="titulo"><Titulo>Mythos</Titulo></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </body>
            </header>
        )
    }
}

export default Header;