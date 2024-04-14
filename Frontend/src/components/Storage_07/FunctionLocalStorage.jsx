const SaveData = () =>{

    const saveData = () => {
        const aluno  = {
            nome: "José Eduardo",
            curso: "Ciência da Computação"
        }
        localStorage.setItem("aluno01", JSON.stringify(aluno))
    }

    return(
        <div>
            <h1>Saving Data...</h1>
            {saveData()}
            <LoadData></LoadData>
        </div>
    )

}

const LoadData = () => {

    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))
        return(
            <>
                <h3>
                    Nome: {alunoCarregado.nome}
                </h3>
                <h3>
                    Curso: {alunoCarregado.curso}
                </h3>
            </>
        )
    }

    return(
        <>
            <h1>Loading Data...</h1>
            {loadData()}
        </>
    )

}

export default SaveData