import { Title } from "./styles";
import { Title_heroi } from "./styles";
import imagem from "../../assets/lore.png"
import React, { useEffect } from "react";
import Contos from "../../assets/bd/contos.json"
import incrementValue from "../../components/Funcoes/view_count";

//https://akhtarvahid.hashnode.dev/how-to-access-local-json-file-to-react



 export default function Ranking() {
    const [UsersData] = React.useState(Contos)
    incrementValue(Contos, "qntAcessos")
    
    
    
    

    return (
    

        <div>
            <Title> Bem vindo à página Ranking</Title>
            <br/>
            

            <div class="row">,
                <div class="col-md-1">
                    <h1>1º</h1>
                    <p></p>             {UsersData && UsersData.map(({qntAcessos, nome}) => (
                <div key={qntAcessos} className="row">
                    <strong>{nome}</strong>
                </div>
            ))} 

                </div>
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200" />
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
            </div>
            
            <br/>

            <div class="row">,


                <div class="col-md-1">
                    <h1>2º</h1>
                </div>
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200" />
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
            </div>
            
            <br/>
            
            <div class="row">,
                <div class="col-md-1">
                    <h1>3º</h1>
                </div>
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200" />
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
            </div>
            <br/>
            
            <div class="row">,
                <div class="col-md-1">
                    <h1>4º</h1>
                </div>
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200" />
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
            </div>
            <br/>
            
            <div class="row">,
                <div class="col-md-1">
                    <h1>5º</h1>
                </div>
                <div class="col-md-2">
                    <img src={imagem} width="200" height="200" />
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.
                        Lorem ipsum dolor sit amet consectetur. Aliquet imperdiet et auctor aliquet libero mi quis scelerisque.
                        Etiam vel sit malesuada id sed. Et eget nullam mattis convallis elit.</p>
                </div>
            </div>
            <br/>


        </div>
    )
}


