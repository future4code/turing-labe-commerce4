import React from 'react'
import styled from 'styled-components'
import Filtros from './Filtros.js'

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
height: 95vh;
`



class Produtos extends React.Component{
    state = {
        seletorOrdem: "cresc"
    }

    onChangeFilter = (event) => {
        this.setState({ seletorOrdem: event.target.value })
      }

    render(){
    
        function ordenaCrescente(a,b){
            return a.valor - b.valor;
        }

        function ordenaDecrescente(a,b){
            return b.valor - a.valor;
        }

        if(this.state.seletorOrdem === "cresc"){
            this.props.arrayProd.sort(ordenaCrescente);
        }
        else if(this.state.seletorOrdem === "decresc"){
            this.props.arrayProd.sort(ordenaDecrescente);
        }
        
        

        const novaListaDeProduto = this.props.arrayProd.filter((produto) => {
            if (produto.valor > this.props.minValor){
                return true
            }else{
                return false
            }
          }).map((produto)=>{
            return (                      
                    <DivProd key={produto.id}>
                        <img src={produto.imagemProd}/>
                        <p>{produto.nome}</p>
                        <p>R$ {produto.valor}</p>
                        <button>Adicionar ao Carrinho</button>
                    </DivProd>
            )
        });

        return(
                <DivTotal>
                    <Filtros valorMax = {this.}/>
                    <DivQuant>
                        <p>Quantidade de produtos: {this.props.msg}</p>
                        <SelectStyled value={this.state.seletorOrdem} onChange={this.onChangeFilter}>
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