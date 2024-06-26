import TelaPrincipal from './TelaPrincipal'
import store from './store'
import { Provider } from 'react-redux'

const MeuIndex  = () => {
    return(
        <Provider store={store}>
            <TelaPrincipal></TelaPrincipal>
        </Provider>
    )
}

export default MeuIndex