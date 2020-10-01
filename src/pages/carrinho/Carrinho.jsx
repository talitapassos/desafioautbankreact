import React from 'react';
import CardItemCarrinho from '../../components/CardItemCarrinho';
import {useListaCompra} from '../../context/listaCompra';
import { formataValor } from '../../utils/intl';
import "./style.css"

function Carrinho () {
    const {listaCompra} = useListaCompra();
    const {valorTotal, desconto }= calculaDesconto(listaCompra);

    return (   
        <div className="carrinho">
            <h1>Meu carrinho</h1>
            <h2>Produtos</h2>
            {
                listaCompra.map(livro => {
                    return <CardItemCarrinho key={livro.id} {...livro} />
                })
            }
            {
                listaCompra.length ? 
                    <div className="totalCompra">
                        <h2>Desconto: {desconto*100}%</h2>
                        <h2>Total: {formataValor(valorTotal)}</h2>
                        <h2>Total com desconto: {formataValor(valorTotal * (1 - desconto))}</h2>
                        <button className="botao-finalizar">Finalizar compra</button>
                    </div>
                :
                    <div className="empty">
                        Lista vazia
                    </div>
            }
           
        </div>
    );
}
 

function calculaDesconto(lista){
    
    const listaLivrosUnicos = lista.length;

    let desconto = 0;
    
    if(listaLivrosUnicos> 0 && listaLivrosUnicos < 4)desconto =(listaLivrosUnicos-1)*0.05;

    else if(listaLivrosUnicos <=5)desconto = listaLivrosUnicos*0.05;
    
    else if(listaLivrosUnicos > 5)desconto = 0.25;
    
    const valorTotal = lista.reduce((total,{preco, qtd})=>{
            
            return total + preco * qtd;
    },0);
    
    return {valorTotal,desconto}

}

export default Carrinho;