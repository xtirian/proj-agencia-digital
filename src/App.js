import {React, useState} from 'react';
import Banner from './componentes/SecaoBanner';
import Informacoes from './componentes/SecaoInformacoes';
import Topo from './componentes/Topo'
import Rodape from './componentes/Rodape'
import './App.css';

function App() {

  const [temaAtual, setTemaAtual] = useState(false)

  function MudarTema () {
    setTemaAtual(!temaAtual)    
  }

  return (
    <div className="App">
      <Topo MudarTema = {MudarTema} temaAtual ={temaAtual} />
      <Banner temaAtual ={temaAtual} />
      <Informacoes temaAtual ={temaAtual} />
      <Rodape temaAtual ={temaAtual} />
    </div>
  );
}

export default App;
