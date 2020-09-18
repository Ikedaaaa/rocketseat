/* import React, {useState} from 'react';      //Deixando "Semana Omnistack" como um atributo em título, não precisa de duas tags
import Header from './Header';              //Usando "Semana Omnistack" entre duas tags, ela é dada como filha
import Logon from './pages/Logon';
function App() {              
  const [counter, setCounter] = useState(0); // useState retorna: Array [valor, funcaoDeAtualizacao]
  function increment(){setCounter(counter + 1);}
  return (<div><Header>Contador: {counter}</Header><button onClick={increment}>Incrementar</button></div>);
}export default App; */

import React from 'react';
import './global.css';
import Routes from './routes'
function App(){
  return(
    <Routes/>
  );
}

export default App;
