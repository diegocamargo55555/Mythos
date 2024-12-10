// interesante
//https://medium.com/@andwebdev/design-and-develop-a-functional-search-bar-in-react-44321ed3c244
//https://www.emgoto.com/react-search-bar/
//https://dev.to/salehmubashar/search-bar-in-react-js-545l
//https://www.youtube.com/watch?v=PFjfGv_WTpU
import "./pesquisa.css"

function pesquisa() {
    const handleInputChange = (e) =>{
        e.preventDefault();
        const {value} = e.target;
        if (value) return;


        const url = 'contos.json'

        console.log('handleInputChange', e.target.value);
    }

    return (

        <div className="container">
            <form>
                <label htmlFor="search"> Search</label>
                <input name="search" id="search" onChange={handleInputChange} />
            </form>
            <div className="search-results">
                <ul>
                    <li><span>Mario</span></li>
                    <li><span>zelda</span></li>
                    <li><span>donkey kong</span></li>
                </ul>

            </div>
        </div>
    )
}

export default pesquisa;
