import { useRef, useState } from "react"

let globalX = 0

const MyRefs = () => {

    let x = 0

    const [stateX, setStateX] = useState(0)
    const [flag, setFlag] = useState(true)
    const refX = useRef(0)

    return(
        <>
            {console.log("RENDER")}
            <h1>X: {x}</h1>
            <h1>StateX: {stateX}</h1>
            <h1>GlobalX: {globalX}</h1>
            <h1>refX: {refX.current}</h1>

            <button onClick={
                () => {
                    x += 1
                    console.log("X: " + x)
                }
                }>
                x + 1
            </button>
            <button onClick={
                () => {
                    setStateX(stateX+1)
                    console.log("StateX: " + stateX)
                }
                }>
                stateX + 1
            </button>
            <button onClick={
                () => {
                    globalX += 1
                    console.log("GlobalX: " + globalX)
                    setFlag(!flag)
                }
                }>
                globalX + 1
            </button>
            <button onClick={
                () => {
                    refX.current = refX.current + 1
                    console.log("RefX: " + refX.current)
                }
                }>
                RefX + 1
            </button>
        </>
    )
}

export default MyRefs