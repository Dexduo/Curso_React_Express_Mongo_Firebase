import React from 'react'

const Calculadora = () => {

    const somar = (x, y) => {
        return x + y
    }

    const subtrair = (x, y) => x - y

    function multiplicar(x, y){
        return x * y
    }

    const dividir = (x, y) => x/y

    const chamarDivisao = (funcaoDeDividir) => {
        return funcaoDeDividir(6, 3)
    }

    return(
        <div>
            <h1>O resultado da soma é: {somar(5, 3)}</h1>
            <h1>O resultado da subtração é: {subtrair(5, 3)}</h1>
            <h1>O resultado da multiplicação é: {multiplicar(5, 3)}</h1>
            <h1>O resultado da divisao é: {chamarDivisao(dividir)}</h1>
            <h1>O resultado da divisao é: {
                chamarDivisao(
                    (x, y) => {
                        return x/y
                    }
                )    
            }</h1>
        </div>
    )   
}

export default Calculadora;