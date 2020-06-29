import React from 'react'
import styled from 'styled-components'

const DivTotal = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
`
const DivQuant = styled.div`
    display: flex;
    justify-content: space-evenly;  
    align-items:baseline;
    width: 100%;
    height: 10vh;
`
const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
`
const DivProd = styled.div`
    margin: 10px;
    border: 1px solid #2b303a;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0.1px #2b303a;
    padding: 4px;
`
const SelectStyled = styled.select`
    height: 20px;
`
const Imagem = styled.img`
    width: 100%;
`
const BotaoAddCarrinho = styled.button`
    background-color: red;
    color: white;
    width: 100%;
    min-height: 30px;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 10px 0.1px gray;
    cursor: pointer;
    transition: 0.7s;
    :hover{
        box-shadow: none;
        background-color: #aa0000;
    }
`
const Paragrafo = styled.p`
    margin: 8px;
    :nth-child(3){
        color: #32ad27;
        font-weight: 700;
        text-decoration: underline;
    }
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
            })
        }
        if(this.props.maxValor !== ""){
            listaFiltrada = listaFiltrada.filter((produto) => {
                if(produto.valor <= this.props.maxValor){
                    return true
                } else {
                    return false
                }
            })
        }
        if(this.props.buscaProduto !== ""){
            listaFiltrada = listaFiltrada.filter((produto) => {
                if(produto.nome === this.props.buscaProduto){
                    return true
                } else {
                    return false
                }
            })
          }

        const novaListaDeProduto = listaFiltrada.map((produto)=>{
            return (
                <DivProd key={produto.id}>
                    <Imagem src={produto.imagemProd}/>
                    <Paragrafo>{produto.nome}</Paragrafo>
                    <Paragrafo>R$ {produto.valor}</Paragrafo>
                    <BotaoAddCarrinho onClick = {() => this.props.addProduto(produto.id)}>Adicionar ao Carrinho</BotaoAddCarrinho>
                </DivProd>
            ) 
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