import { useDispatch } from 'react-redux'
import { decrementarValor } from './slices/idSlice'
import { useSelector } from 'react-redux'

const BotaoDecrementarValor = () =>{
    
    const dispatch = useDispatch()
    let valor = 10
    const id = useSelector(
        (state) => state.id.value
    ) 

    const logicaDecrementar = () => {
        if( (id - valor) < 1 ) return
        dispatch(decrementarValor(valor))
    }

    return(

        <>
            <button onClick={logicaDecrementar}>
                ID - {valor}
            </button>
        </>

    )
}

export default BotaoDecrementarValor