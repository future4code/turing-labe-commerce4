import React from 'react';
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho.js'
import Filtros from './components/Filtros'
import styled from 'styled-components'
import IconCompra from './Imagens/compra.png'
const DivPai = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  width:100%;
  box-sizing: border-box;
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
class App extends React.Component {
  state = {
    produtos: [
      {id:1, nome: "Produto 1", valor: 100.0, imagemProd: "https://picsum.photos/200/200?ramdon=1"},
      {id:2, nome: "Produto 2", valor: 200.0, imagemProd: "https://picsum.photos/200/200?ramdon=2"},
      {id:3, nome: "Produto 3", valor: 300.0, imagemProd: "https://picsum.photos/200/200?ramdon=3"},
      {id:4, nome: "Produto 4", valor: 400.0, imagemProd: "https://picsum.photos/200/200?ramdon=4"},
      {id:5, nome: "Produto 5", valor: 500.0, imagemProd: "https://picsum.photos/200/200?ramdon=5"},
      {id:6, nome: "Produto 6", valor: 600.0, imagemProd: "https://picsum.photos/200/200?ramdon=6"},
      {id:7, nome: "Produto 7", valor: 700.0, imagemProd: "https://picsum.photos/200/200?ramdon=7"},
      {id:8, nome: "Produto 8", valor: 800.0, imagemProd: "https://picsum.photos/200/200?ramdon=8"}
    ],
    addProduto:[],
    carrinho:false,
    maxValor: "",
    minValor: "",
    buscaProduto: "",
    seletorOrdem: "cresc"
  }
  adicionaProduto = (produtoId) => {
    const novoProduto = this.state.produtos.filter((produto)=>{
      return produtoId === produto.id
    }).map((produto)=>{
      return(
        <div>
          <ul>
            <li>{produto.nome}</li>
          </ul>
          <p>{produto.valor}</p>
        </div>
      )
    })
    this.setState({produtos:novoProduto})
    console.log(this.state.produtos)
  };
  onChangeInputMax = (event) => {
    this.setState({ maxValor: event.target.value });
    console.log(this.state.maxValor)
  };
  onChangeInputMin = (event) => {
    this.setState({ minValor: event.target.value });
    console.log(this.state.minValor)
  };
  onChangeInputBusca = (event) => {
    this.setState({ buscaProduto: event.target.value });
    console.log(this.state.buscaProduto)
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
        <DivPai className="App">
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
          />
          <Carrinho />
          <DivCar>
            <FormactCar src={IconCompra} onClick={this.renderizaCarrinho}/>
          </DivCar>
        </DivPai>
      )
    }
    return (
      <DivPai className="App">
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
          />
        <DivCar>
          <FormactCar src={IconCompra} onClick={this.renderizaCarrinho}/>
        </DivCar>
      </DivPai>
    );
  }  
}
export default App;