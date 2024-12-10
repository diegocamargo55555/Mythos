import contos from '../../assets/bd/contos.json'
import herois from '../../assets/bd/herois.json'

import { useState } from 'react'
import "./pesquisa.css"

function Pesquisa() {

    const [query, setQuery] = useState("");
    return (
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
        </div>
    )
}

export default Pesquisa;
