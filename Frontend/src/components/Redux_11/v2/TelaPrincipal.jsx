import Imagem from "./Imagem"
import BotaoIncrementar from "./BotaoIncrementar"
import BotaoDecrementar from "./BotaoDecrementar"
import {useState} from 'react'

const TelaPrincipal = () =>{

    const [id, setId] = useState(150)

    const incrementar = () => {
        setId((prev) => prev + 1)
    }

    const decrementar = () => {
        setId((prev) => prev - 1)
    }

    return(

        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Imagem id={id}></Imagem>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoDecrementar decrementar={decrementar}></BotaoDecrementar>
                        </td>
                        <td>
                            <BotaoIncrementar incrementar={incrementar}></BotaoIncrementar>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default TelaPrincipal