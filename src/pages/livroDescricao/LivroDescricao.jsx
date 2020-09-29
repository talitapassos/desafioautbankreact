import React from 'react';
import "./style.css"
import api from '../../services/api'
import {useListaCompra} from '../../context/listaCompra';
import { formataValor, intl } from '../../utils/intl'
function LivroDescricao (props) {
    
    const {addLivroCarrinho} = useListaCompra();

    const { match } = props
    const livroDetalhe = api.getLivros().filter(livro => livro.id == match.params.id)[0]
    return (   
        <div className="livroDescricao">
             <div>
                     <img id="img-livroDetail" src={livroDetalhe.img} alt={livroDetalhe.titulo}></img>
                 </div>
                 <div className="descricao">
                     <strong>{livroDetalhe.titulo}</strong>
                    <span>{livroDetalhe.autor}</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                         the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                         but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                         software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 </div>
                 <div className="compra">
                     <h2>{formataValor(livroDetalhe.preco)}</h2>
                     <a className="botao-comprar" onClick={()=> addLivroCarrinho(livroDetalhe)}> Comprar</a>
                 </div>
          
        </div>
    );
}
 

export default LivroDescricao;