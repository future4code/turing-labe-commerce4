import React from 'react'
import styled from 'styled-components'

const DivFilter = styled.div`
    border: solid 1px black; 
    justify-content: left;
    min-width: 20%;
    height: 95vh;
    text-align: center;
`

const DivTeste = styled.div`
    display: flex;
    padding: 10px;
`

const InputProd = styled.input`
width: 60%;
height: 15px;
margin: 0px 0px 0px 10px;
`

const DivProd = styled.div`
    margin: 16px;
`

const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width:100%;
`

class Filtros extends React.Component{
    state = {
        maxValor: 0,
        minValor: 0,
        buscaProduto: ""
    }

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


    render(){

        return(
            
            <DivFilter>
                <h3>Filtros:</h3> 
                <br/>
                <DivTeste>
                <span>Valor Mínimo:</span>
                <InputProd type="Number" value={this.state.minValor} onChange={this.onChangeInputMin}/>
                </DivTeste>
                <DivTeste>
                <span>Valor Máximo:</span>
                <InputProd type="Number" value={this.state.maxValor} onChange={this.onChangeInputMax}/>
                </DivTeste>
                <DivTeste>
                <span>Busca Produto:</span>
                <InputProd type="text" value={this.state.buscaProduto} onChange={this.onChangeInputBusca}/>
                </DivTeste>
            </DivFilter>

        )
    }
}

export default Filtros