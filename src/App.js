import React from 'react';
import PaginaInicial from './paginaInicial'
import Topo from './componentes/Topo'
import Rodape from './componentes/Rodape'
import './App.css';

function App() {
  return (
    <div className="App">
      <Topo />
      <PaginaInicial />
      <Rodape />
    </div>
  );
}

export default App;
