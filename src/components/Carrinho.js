import React from 'react'
import styled from 'styled-components'

const Cart = styled.div`
    border: 1px solid black;
    text-align: left;
    width: 20%;
    height: 95vh;
`
    

class Carrinho extends React.Component{
    render(){
            
        return(
            <Cart>
                <h3>Carrinho:</h3>
                <p>Total: R$</p>
            </Cart>
        )
    }
}

export default Carrinho