export function Post(props) {
    return (
        <div>
            <br />
            <div class="row">
                <div class="col-md-1">
                    <h1></h1>
                    <h3>{props.nome}</h3>
                    likes:{props.qntAcessos}
                </div>
                <div class="col-md-1">
                    <img src={props.imagem} width="150" height="150" />
                </div>
                <div class="col-md-8">
                    <p>{props.resumo}</p>
                </div>
            </div>
        </div>
    )
}