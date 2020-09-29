import React from 'react';
import api from '../../services/api'
import {useListaCompra} from '../../context/listaCompra';
import { formataValor, intl } from '../../utils/intl'
import "./style.css"

function LivroDescricao (props) {
    
    const {addLivroCarrinho} = useListaCompra();

    const { match } = props
    const livroDetalhe = api.getLivros().filter(livro => livro.id == match.params.id)[0]
    return (   
            <>
            {livroDetalhe?
                <div className="livro-descricao">
                    <div>
                        <img id="img-livro_detalhe" src={livroDetalhe.img} alt={livroDetalhe.titulo}></img>
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
                                
                <div className="livro-descricao">
                    <h2 className="empty-descricao">Livro não cadastrado</h2> 
                </div>
}
                 
          
        </>
    );
}
 

export default LivroDescricao;