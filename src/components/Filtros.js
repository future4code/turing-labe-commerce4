import React from 'react'
import styled from 'styled-components'
const DivFilter = styled.div`
    border: solid 1px black; 
    justify-content: left;
    min-width: 20%;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
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
    render(){
        return(
            <DivFilter>
                <h3>Filtros:</h3> 
                <br/>
                <DivTeste>
                <span>Valor Mínimo:</span>
                <InputProd type="number" value={this.props.min} onChange={this.props.imin}/>
                </DivTeste>
                <DivTeste>
                <span>Valor Máximo:</span>
                <InputProd type="number" value={this.props.max} onChange={this.props.imax}/>
                </DivTeste>
                <DivTeste>
                <span>Busca Produto:</span>
                <InputProd type="text" value={this.props.busca} onChange={this.props.ibusca}/>
                </DivTeste>
            </DivFilter>
        )
    }
}
export default Filtros