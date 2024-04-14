import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"

const FuncaoA = () => {

    const cor = "red"

    return(
        <CorContexto.Provider value={ { cor:cor, nome:"José Eduardo", cor2:"green" } }>
            <div>
                <h1 style={{backgroundColor:cor}}>Função A</h1>
                <FuncaoB cor={cor}></FuncaoB>
                <FuncaoC cor={cor}></FuncaoC>
            </div>
        </CorContexto.Provider>
    )
}

export default FuncaoA