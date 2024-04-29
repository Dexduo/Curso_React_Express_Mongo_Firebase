import './App.css';
// import HelloWorld from './components/HelloWorld_00';
// import Calculadora from './components/Calculadora_01';
// import MyProps from './components/MyProps_02';
// import FunctionA from './components/Hierarquia_03.jsx/FunctionA';
// import { Header, Body, Footer } from './components/MultiplosComponentes_04';
// import  * as Site  from './components/MultiplosComponentes_04';
// import {Supermercado, Legume, Fruta, Bebida} from './components/Children_05';
// import FuncaoA from './components/Contexto_06.jsx/FuncaoA';
// import SaveData from './components/Storage_07/FunctionLocalStorage';
// import Pai from './components/PaiFilho_10/Pai'
// import FunctionEstados from './components/Estados_09/FunctionEstados';
// import PokemonAxios from './components/Axios_10/PokemonAxios.jsx';
import TelaPrincipal from './components/Redux_11/v1/TelaPrincipal';

function App() {
  return (
    <div className='App'>
      <TelaPrincipal></TelaPrincipal>

      {/* <PokemonAxios></PokemonAxios> */}

      {/* <FunctionEstados></FunctionEstados> */}

      {/* <Pai></Pai> */}
      {/* <SaveData></SaveData> */}

      {/* <FuncaoA/> */}

      {/* <Supermercado nome="DuPovu">
        <Fruta nome="Banana"></Fruta>
        <Legume nome="Batata"></Legume>
        <Bebida nome="Suco de Uva"></Bebida>
      </Supermercado> */}
      {/*<HelloWorld></HelloWorld>*/}
      {/* {<Calculadora></Calculadora>} */}
      {/* <MyProps nome="José Eduardo Nogueira" idade={18} curso="Ciência da Computação"></MyProps>
      <FunctionA numeroX={100}></FunctionA> */}
      {/* <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <Site.Header></Site.Header> */}
    </div>
  );
}

export default App;
