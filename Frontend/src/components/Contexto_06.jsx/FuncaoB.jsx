import CorContexto from "./MeuContexto"

const FuncaoB= () => {
    return(
        <CorContexto.Consumer>
            {
                ({cor, nome}) => {
                    return(
                        <div>
                            <h1 style={{backgroundColor:cor}} >Função B de {nome}</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoB