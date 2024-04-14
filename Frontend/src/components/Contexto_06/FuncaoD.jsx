import CorContexto from "./MeuContexto"

const FuncaoD = () => {
    return(
        <CorContexto.Consumer>
            {
                ({cor2, nome}) => {
                    return(
                        <div>
                            <h1 style={{backgroundColor:cor2}} >Função D de {nome}</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoD