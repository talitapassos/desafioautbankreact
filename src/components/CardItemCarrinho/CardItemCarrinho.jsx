import React from 'react'
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
                         <h1 class="titulo">{titulo}</h1>
                     </div>
                     <div>
                         <p>{autor}</p>
                     </div>
                 </section>
                 <div className="quantityInputBox">
                     <span onClick={() => subQtdLivro(id)}>-</span>
                     <input type="number" min="1" value={qtd} onChange={(val) => alteraQtdLivro(id, Number(val.target.value))}></input>
                     <span onClick={() => addQtdLivro(id)}>+</span>
                 </div>
                 <div>
                    <h2>{formataValor(preco * qtd)}</h2>
                 </div>
             </section>
        </div>
    )
}

export default CardItemCarrinho
