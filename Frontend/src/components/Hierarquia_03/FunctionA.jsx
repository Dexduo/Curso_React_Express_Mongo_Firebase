import React from 'react'
import FunctionB from './FunctionB'

const FunctionA = ({numeroX}) => {
    return(
        <div>
            <h1>Componente A</h1>
            <FunctionB x={numeroX} y={5}></FunctionB>
        </div>
    )
}

export default FunctionA