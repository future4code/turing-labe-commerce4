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

class Filtros extends React.Component{
    render(){
        return(
            <DivFilter>
                <h3>Filtros:</h3> 
                <br/>
                <DivTeste>
                <span>Valor Mínimo:</span>
                <InputProd type="Number"/>
                </DivTeste>
                <DivTeste>
                <span>Valor Máximo:</span>
                <InputProd type="Number"/>
                </DivTeste>
                <DivTeste>
                <span>Busca Produto:</span>
                <InputProd type="text"/>
                </DivTeste>
            </DivFilter>
        )
    }
}

export default Filtros