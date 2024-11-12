import { Link } from "react-router-dom";

import './Home.css'

function home() {
    return (

        <div>
            <h1> Bem vindo à página HOME</h1>

            <div>
                <p>dadwadawd </p>
                <br/>
                <Link to='/sobre'>Sobre</Link>
                <br />
                <Link to='/contato'>Contato</Link>

            </div>






        </div>

    )
}

export default home;
