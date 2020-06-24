import React from 'react';
import './App.css';
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho.js'
import Filtros from './components/Filtros.js'
import IconCompra from './Imagens/compra.png'
import styled from 'styled-components'

const DivPai = styled.div`
display: flex;
justify-content: space-between;
height: 95vh;
margin: 5px;
width:100%;
`

const FormactCar = styled.img`
height: 40px;
`

const DivCar = styled.div`
background-color: #FFFF;
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
box-shadow: 0px 0px 5px 1px gray;
position: fixed;
bottom: 10px;
right: 10px;
`



function App() {

  
  return (
    <DivPai className="App">
      <Filtros />
      <Produtos />
      {/* <Carrinho /> */}
      <DivCar>
        <FormactCar src={IconCompra}/>
      </DivCar>
    </DivPai>
  );
}

export default App;
