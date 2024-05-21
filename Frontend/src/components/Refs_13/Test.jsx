import {useState, useRef} from 'react'

const Test = () => {
    const [stateData, setStateData] = useState(0)
    const refData = useRef(0)

    console.log(refData.current)

    const inc = () => {
        setStateData(stateData + 1)
        refData.current = refData.current + 1
    }

    return(
        <>
            <h1>{"State " + stateData}</h1>
            <h1>{"Ref " + refData.current}</h1>
            <button onClick={inc}>
                Incrementa
            </button>
        </>
    )
}

export default Test