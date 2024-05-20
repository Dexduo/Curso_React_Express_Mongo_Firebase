import { useEffect } from "react"

const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = true
        if(x) resolve({msg:"Deu Certo"})
        else reject({msg:"Deu Errado"})
    }
)

const MeuAsync = () => {

    useEffect(
        () => {
            getPromessaAsync()
        },
        []
    )

    function getPromessaThen(){
        minhaPromessa
        .then(
            (data) => {console.log(data.msg)}
        )
        .catch(
            (data) => console.log(data.msg)
        )
    }

    async function getPromessaAsync(){
        try{
            const data = await minhaPromessa
            console.log(data.msg)
        }
        catch(error){
            console.log(error.msg)
        }
    }

    return(
    <>
        <h1>Testando o Async</h1>
    </>
    )
}

export default MeuAsync