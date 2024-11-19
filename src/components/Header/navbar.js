import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css";
import { Titulo } from "./header";


function Header() {
    
    return (
        
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Jim+Nightshade&display=swap" rel="stylesheet"/>
            <body className="body">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid" className="header">
                        <Link class="navbar-brand" to='/' className="titulo"><Titulo>Mythos</Titulo></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to='/Acessibilidade'><p className="item">Acessibilidade</p></Link>
                                </li>
                                <NavDropdown title="Lista" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to='/Pesquisa'>Pesquisa</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </body>
        </header>
        
        


    )
}

export default Header;