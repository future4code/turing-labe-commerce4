import React from 'react';
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho.js'
import Filtros from './components/Filtros'
import styled from 'styled-components'
import IconCompra from './Imagens/compra.png'

const DivComCarrinho = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: white;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 1fr;
  height: 98%;
  width: 98%;
  box-sizing: border-box;
  margin: 1%;
`
const DivSemCarrinho = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: white;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 1fr;
  height: 98%;
  width: 98%;
  box-sizing: border-box;
  margin: 1% 0 1% 1%;
`
const IconeCarrinho = styled.img`
  height: 40px;
`
const DivApareceCarrinho = styled.div`
  background-color: #FFFF;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 4px #32ad27;
  position: fixed;
  bottom: 20px;
  left: 20px;
  :hover{
    box-shadow: 0px 0px 2px 4px green;
    cursor: pointer;
  }
`

class App extends React.Component {
  state = {
    produtos: [
      {id:1, nome: "Produto 1", valor: 100.0, imagemProd: "https://picsum.photos/150/150?ramdon=1"},
      {id:2, nome: "Produto 2", valor: 150.0, imagemProd: "https://picsum.photos/150/150?ramdon=2"},
      {id:3, nome: "Produto 3", valor: 300.0, imagemProd: "https://picsum.photos/150/150?ramdon=3"},
      {id:4, nome: "Produto 4", valor: 400.0, imagemProd: "https://picsum.photos/150/150?ramdon=4"},
      {id:5, nome: "Produto 5", valor: 500.0, imagemProd: "https://picsum.photos/150/150?ramdon=5"},
      {id:6, nome: "Produto 6", valor: 600.0, imagemProd: "https://picsum.photos/150/150?ramdon=6"},
      {id:7, nome: "Produto 7", valor: 700.0, imagemProd: "https://picsum.photos/150/150?ramdon=7"},
      {id:8, nome: "Produto 8", valor: 800.0, imagemProd: "https://picsum.photos/150/150?ramdon=8"}
    ],
    carrinho: false,
    maxValor: "",
    minValor: "",
    buscaProduto: "",
    seletorOrdem: "cresc"
  }

  addProdutoCarrinho = (prodid) => {
    const itensCarrinho = this.state.produtos.filter((item) => {
      if(prodid === item.id){
        return true
      }else{
        return false
      }
    })
    console.log(this.state.itensCarrinho)
  }
  onChangeInputMax = (event) => {
    this.setState({ maxValor: event.target.value });
  };
  onChangeInputMin = (event) => {
    this.setState({ minValor: event.target.value });
  };
  onChangeInputBusca = (event) => {
    this.setState({ buscaProduto: event.target.value });
  };
  onChangeFilter = (event) => {
    this.setState({ seletorOrdem: event.target.value })
  }
  renderizaCarrinho = ()=>{
    this.setState({carrinho: !this.state.carrinho});
  }

  mensagem = this.state.produtos.length

  render(){
    if(this.state.carrinho){
      return (
        <DivComCarrinho className="App">
          <Filtros arrayProd = {this.state.produtos}
            max = {this.state.maxValor}
            min = {this.state.minValor}
            busca = {this.state.buscaProduto}
            imax = {this.onChangeInputMax}
            imin = {this.onChangeInputMin}
            ibusca = {this.onChangeInputBusca}
          />
          <Produtos
            msg = {this.mensagem}
            arrayProd = {this.state.produtos}
            maxValor = {this.state.maxValor}
            minValor = {this.state.minValor}
            buscaProduto = {this.state.buscaProduto}
            seletorOrdem = {this.state.seletorOrdem}
            onChangeFilter = {this.onChangeFilter}
            addProduto = {this.addProdutoCarrinho}
          />
          <Carrinho 
            itensCarrinho = {this.state.itensCarrinho}
          />
          <DivApareceCarrinho onClick={this.renderizaCarrinho}>
            <IconeCarrinho src={IconCompra} />
          </DivApareceCarrinho>
        </DivComCarrinho>
      )
    }
    return (
      <DivSemCarrinho className="App">
        <Filtros arrayProd = {this.state.produtos}
          max = {this.state.maxValor}
          min = {this.state.minValor}
          busca = {this.state.buscaProduto}
          imax = {this.onChangeInputMax}
          imin = {this.onChangeInputMin}
          ibusca = {this.onChangeInputBusca}
        />
        <Produtos
          msg = {this.mensagem}
          arrayProd = {this.state.produtos}
          maxValor = {this.state.maxValor}
          minValor = {this.state.minValor}
          buscaProduto = {this.state.buscaProduto}
          seletorOrdem = {this.state.seletorOrdem}
          onChangeFilter = {this.onChangeFilter}
          addProduto = {this.addProdutoCarrinho}
        />
        <DivApareceCarrinho onClick={this.renderizaCarrinho}>
          <IconeCarrinho src={IconCompra} />
        </DivApareceCarrinho>
      </DivSemCarrinho>
    );
  }  
}
export default App;