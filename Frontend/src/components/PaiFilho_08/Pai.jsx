import Filho from "./Filho"
import { useState } from "react"

const Pai = () => {

    const [nome, setNome] = useState("Teste")

    const mensagemDoFilho = (msg) => {
        alert("Meu Filho disse: " + msg)
        setNome("José Eduardo") //Só será setado quando a função for executada pelo filho
    }

    return(
        <div>
            <h1>Pai {nome}</h1>
            <Filho falarComPai={mensagemDoFilho}></Filho>
        </div>
    )
}

export default Pai