import React from 'react'
import styled from 'styled-components'

const Cart = styled.div`
    border: 1px solid #2b303a;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 0.1px #2b303a;
    width: 100%;
    height: 100%;
    > * {
        margin-left: 10px;
    }
`

class Carrinho extends React.Component{
    render(){
        return(
            <Cart>
                <h3>Carrinho:</h3>
                
                <p>Total: R$</p>
                {this.props.itensCarrinho}
            </Cart>
        )
    }
}
export default Carrinho