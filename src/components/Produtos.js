import React from 'react'
import styled from 'styled-components'
const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width:100%;
`
const DivQuant = styled.div`
    display: flex;
    justify-content: space-evenly;  
    align-items:baseline;
`
const DivProd = styled.div`
    margin: 16px;
`
const SelectStyled = styled.select`
    height: 10%;
`
const DivTotal = styled.div`
    height: 100vh;
`
class Produtos extends React.Component{
    render(){
        function ordenaCrescente(a,b){
            return a.valor - b.valor;
        }
        function ordenaDecrescente(a,b){
            return b.valor - a.valor;
        }
        if(this.props.seletorOrdem === "cresc"){
            this.props.arrayProd.sort(ordenaCrescente);
        }
        else if(this.props.seletorOrdem === "decresc"){
            this.props.arrayProd.sort(ordenaDecrescente);
        }
        let listaFiltrada = this.props.arrayProd;
        if(this.props.minValor !== ""){
          listaFiltrada = listaFiltrada.filter((produto) => {
            if(produto.valor >= this.props.minValor){
              return true
            } else {
              return false
            }
            console.log(listaFiltrada)
          })
        }
        if(this.props.maxValor !== ""){
          listaFiltrada = listaFiltrada.filter((produto) => {
            if(produto.valor <= this.props.maxValor){
              return true
            } else {
              return false
            }
            console.log(listaFiltrada)
          })
        }
        if(this.props.buscaProduto !== ""){
            listaFiltrada = listaFiltrada.filter((produto) => {
              if(produto.nome === this.props.buscaProduto){
                return true
              } else {
                return false
              }
              console.log(listaFiltrada)
            })
          }
        const novaListaDeProduto = listaFiltrada.map((produto)=>{
            return (
                    <DivProd key={produto.id}>
                        <img src={produto.imagemProd}/>
                        <p>{produto.nome}</p>
                        <p>R$ {produto.valor}</p>
                        <button onClick={this.props.adicionaProduto}>Adicionar ao Carrinho</button>
                    </DivProd>
            )
            console.log(novaListaDeProduto)
        });
        return(
                <DivTotal>
                    <DivQuant>
                        <p>Quantidade de produtos: {this.props.msg}</p>
                        <SelectStyled value={this.props.seletorOrdem} onChange={this.props.onChangeFilter}>
                            <option value="cresc">Preço: Crescente</option>
                            <option value="decresc">Preço: Decrescente</option>
                        </SelectStyled>
                    </DivQuant>
                    <DivProdutos>
                        {novaListaDeProduto}
                    </DivProdutos>
                </DivTotal>
        );
    }
} 
export default Produtos;