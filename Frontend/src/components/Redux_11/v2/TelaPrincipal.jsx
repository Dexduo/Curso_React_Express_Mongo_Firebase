import Imagem from "./Imagem"
import BotaoIncrementar from "./BotaoIncrementar"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoDecrementarValor from "./BotaoDecrementarValor"
import BotaoIncrementarValor from "./BotaoIncrementarValor"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"

const TelaPrincipal = () =>{

    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [loading, setLoading] = useState(false)

    const id = useSelector(
        (state) => state.id.value
    ) 

    const renderizarImagem = () => {
        if(loading) return(
            <h3>Carregando...</h3>
        )
        return (
            <Imagem nome={nome} imagem={imagem}></Imagem>
        )
    }

    useEffect(
        () => {
            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setLoading(false)
                }
            )
            .catch(error => {console.log(error); setLoading(false)} )
        },
        [id]
    )

    return(

        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderizarImagem()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoDecrementarValor ></BotaoDecrementarValor>
                            <BotaoDecrementar ></BotaoDecrementar>
                        </td>
                        <td>
                            <BotaoIncrementar ></BotaoIncrementar>
                            <BotaoIncrementarValor ></BotaoIncrementarValor>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default TelaPrincipal