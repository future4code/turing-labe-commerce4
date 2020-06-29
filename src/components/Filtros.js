import React from 'react'
import styled from 'styled-components'

const DivFilter = styled.div`
    border: solid 1px #2b303a; 
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0.1px #2b303a;
    width: 100%;
    height: 100%;
    > * {
        margin-left: 10px;
    }
`
const Espaco = styled.div`
    margin: 32px 10px;
    &:nth-child(2){
        margin-top: 50px;
    }
`
const InputProd = styled.input`
    display:block;
    width: 80%;
    height: 16px;
    border-radius: 2px;
    border: none;
`

class Filtros extends React.Component{ 
    render(){
        return(
            <DivFilter>
                <h3>Filtros:</h3> 
                <Espaco>          
                    <span>Valor Mínimo:</span>
                    <InputProd type="number" value={this.props.min} onChange={this.props.imin}/>
                </Espaco>
                <Espaco> 
                    <span>Valor Máximo:</span>
                    <InputProd type="number" value={this.props.max} onChange={this.props.imax}/>    
                </Espaco>  
                <Espaco> 
                    <span>Busca Produto:</span>
                    <InputProd type="text" value={this.props.busca} onChange={this.props.ibusca}/> 
                </Espaco>      
            </DivFilter>
        )
    }
}
export default Filtros