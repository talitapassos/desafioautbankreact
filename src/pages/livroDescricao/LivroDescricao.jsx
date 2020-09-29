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
            <>
            {livroDetalhe ?
                <div className="livroDescricao">
             <div>
                     <img id="img-livroDetail" src={livroDetalhe.img} alt={livroDetalhe.titulo}></img>
                 </div>
                 <div className="card-descricao">
                     <strong>{livroDetalhe.titulo}</strong>
                    <span>{livroDetalhe.autor}</span>
                    <p className='descricao'>{livroDetalhe.descricao}</p>
                 </div>
                 <div className="compra">
                     <h2>{formataValor(livroDetalhe.preco)}</h2>
                     <a className="botao-comprar" onClick={()=> addLivroCarrinho(livroDetalhe)}> Comprar</a>
                 </div>
                 </div>
    :
                                
                <div className="livroDescricao">
               <h2 className="emptyDesc">Livro não cadastrado</h2> 
                </div>
}
                 
          
        </>
    );
}
 

export default LivroDescricao;