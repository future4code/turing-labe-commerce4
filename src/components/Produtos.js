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
height: 95vh;
`



class Produtos extends React.Component{
    state = {
        produtos: [
        {id:1, nome: "Produto 1", valor: 800.0, imagemProd: "https://picsum.photos/200/200?ramdon=1"},
        {id:2, nome: "Produto 2", valor: 200.0, imagemProd: "https://picsum.photos/200/200?ramdon=2"},
        {id:3, nome: "Produto 3", valor: 300.0, imagemProd: "https://picsum.photos/200/200?ramdon=3"},
        {id:4, nome: "Produto 4", valor: 500.0, imagemProd: "https://picsum.photos/200/200?ramdon=4"},
        {id:5, nome: "Produto 5", valor: 50.0, imagemProd: "https://picsum.photos/200/200?ramdon=5"},
        {id:6, nome: "Produto 6", valor: 600.0, imagemProd: "https://picsum.photos/200/200?ramdon=6"},
        {id:7, nome: "Produto 7", valor: 7100.0, imagemProd: "https://picsum.photos/200/200?ramdon=7"},
        {id:8, nome: "Produto 8", valor: 80.0, imagemProd: "https://picsum.photos/200/200?ramdon=8"}
        ],
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
            this.state.produtos.sort(ordenaCrescente);
        }
        else if(this.state.seletorOrdem === "decresc"){
            this.state.produtos.sort(ordenaDecrescente);
        }
        
        const mensagem = this.state.produtos.length

        const novosProdutos = this.state.produtos.map((produto)=>{
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
                    <DivQuant>
                        <p>Quantidade de produtos: {mensagem}</p>
                        <SelectStyled value={this.state.seletorOrdem} onChange={this.onChangeFilter}>
                            <option value="cresc">Preço: Crescente</option>
                            <option value="decresc">Preço: Decrescente</option>
                        </SelectStyled>
                    </DivQuant>
                    <DivProdutos>
                        {novosProdutos}
                    </DivProdutos>
                </DivTotal>
        );
    }
} 

export default Produtos;