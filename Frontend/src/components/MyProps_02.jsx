import React from 'react'

// const MyProps = (props) => {
    
//     const renderizarMeuNome = () => {
//         return (
//             <span> Eduardo </span>
//         )
//     }

//     return (
//         <div>
//             <h1>Meu nome é {renderizarMeuNome()}</h1>
//             <h1>Meu nome, com props, é {props.nome}</h1>
//         </div>
//     )
// }

// const MyProps = (props) => {

//     const {nome, idade, curso} = props

//     return (
//         <div>
//             <h1>Meu nome é {nome}</h1>
//             <h1>Minha idade é {idade}</h1>
//             <h1>Meu curso é {curso}</h1>
//         </div>
//     )
// }

const MyProps = ({nome, idade, curso}) => { 

    return (
        <div>
            <h1>Meu nome é {nome}</h1>
            <h1>Minha idade é {idade}</h1>
            <h1>Meu curso é {curso}</h1>
        </div>
    )
}

export default MyProps