import React from 'react'
import './style.css'
import { useListaCompra } from '../../context/listaCompra'
import { formataValor, intl } from '../../utils/intl'

function CardItemCarrinho({ img, titulo, autor, preco, id, qtd }) {

    const {addQtdLivro, subQtdLivro, alteraQtdLivro} = useListaCompra()

    return (
        <div>
            <section className="card-livro_carrinho  grid-template-columns-4">
                 <div>
                     <img id="img-livro" src={img} alt={titulo}></img>
                 </div>
                 <section>
                     <div>
                         <h1 class="tituloMin">{titulo}</h1>
                     </div>
                     <div>
                         <p>{autor}</p>
                     </div>
                 </section>
                 <div className="quantidade">
                     
                     <button className="btnQtd" onClick={() => subQtdLivro(id)}><span>-</span></button>
                     <input type="number" min="1" value={qtd} onChange={(val) => alteraQtdLivro(id, Number(val.target.value))} disabled></input>
                     <button  className="btnQtd"  onClick={() => addQtdLivro(id)}><span>+</span></button>
                 </div>
                 <div>
                    <h2>{formataValor(preco * qtd)}</h2>
                 </div>
             </section>
        </div>
    )
}

export default CardItemCarrinho
