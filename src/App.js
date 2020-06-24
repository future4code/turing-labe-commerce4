import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho.js'
import Filtros from './components/Filtros.js'
import IconCompra from './Imagens/compra.png'

function App() {
  return (
    <div className="App">
      <Filtros />
      <Produtos />
      <Carrinho />
      <img src={IconCompra}/>
    </div>
  );
}

export default App;
