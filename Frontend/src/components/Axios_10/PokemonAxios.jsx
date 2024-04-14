import axios from "axios"
import { useEffect, useState } from "react"

const PokemonAxios = () => {

    const [id, setId] = useState(1)
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [imagem2, setImagem2] = useState("")

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        },
        [id]
    )

    // const catchPokemon = () => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then(
    //         (response) => {
    //             setNome(response.data.name)
    //             setImagem(response.data.sprites.front_default)
    //         }
    //     )
    //     .catch(
    //         (error) => {
    //             console.log(error)
    //         }
    //     )
    // }

    return(
        <div>
            {/* <input type="text" name="idPokemon" value={id} onChange={e => setId(e.target.value)}/> */}
            {/* <button onClick={catchPokemon} >Procurar pokemon</button> */}
            <h3>Nome: {nome}</h3>
            <h3>ID: {id}</h3>
            
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={imagem} style={{ width:"400px" }} />
                        </td>
                        <td>
                            <img src={imagem2} style={{ width:"400px" }} />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={
                () =>{
                    setId(id-1)
                }
            }>
                Pokémon Anterior
            </button>

            <button onClick={
                () =>{
                    setId(id+1)
                    // catchPokemon()
                }
            }>
                Próximo Pokémon
            </button>
        </div>
    )

}

export default PokemonAxios