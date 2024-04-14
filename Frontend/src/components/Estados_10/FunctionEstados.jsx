import { useEffect, useState } from "react"

const FunctionEstados = () => {

    const [contador, setContador] = useState(0)

    const [isEven, setIsEven] = useState(true)

    useEffect(
        () => {
            if(contador%2==0){
                setIsEven(true)
            } else{
                setIsEven(false)
            }
        },
        [contador]
    )

    const acaoBotao = () => {
        setContador(contador+1)
    }

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <h1>É par: {""+isEven}</h1>
            <button onClick={acaoBotao}>
                Aumentar Contador
            </button>
        </div>  
    )
}

export default FunctionEstados