import { Children, cloneElement } from "react"

// const Supermercado = ({children, nome}) => {
//     return(
//         <div>
//             <h1>Supermercado {props.nome}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Supermercado = ({children, nome}) => {
//     return(
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {
//                 Children.map(
//                     children,
//                     (filho) => {
//                         return (
//                             <div style={{background:"red"}}>
//                                 {filho}
//                             </div>
//                         )
//                     }
//                 )
//             }
//         </div>
//     )
// }

const Supermercado = ({children, nome}) => {
    return(
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    filho => 
                        cloneElement(filho, {supermercado: nome})
                )
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => {
    return(
        <div>
            <h3>Legume {nome} do supermercado {supermercado}</h3>
        </div>
    )
}

const Fruta = ({nome}) => {
    return(
        <div>
            <h3>Fruta {nome}</h3>
        </div>
    )
}

const Bebida = ({nome}) => {
    return(
        <div>
            <h3>Bebida {nome}</h3>
        </div>
    )
}

export {Supermercado, Legume, Fruta, Bebida}