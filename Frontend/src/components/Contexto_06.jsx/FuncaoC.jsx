import FuncaoD from "./FuncaoD"
import { useContext } from "react"
import CorContexto from "./MeuContexto"

const FuncaoC = () => {

    const {cor, cor2, nome} = useContext(CorContexto)

    return(
        <div>
            <h1 style={ { backgroundColor:cor2 } }>Função C</h1>
            <FuncaoD></FuncaoD>
        </div>
    )
}

export default FuncaoC