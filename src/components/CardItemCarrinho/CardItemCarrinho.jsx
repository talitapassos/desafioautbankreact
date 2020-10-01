import React from 'react'
import { useListaCompra } from '../../context/listaCompra'
import { formataValor, intl } from '../../utils/intl'
import { DeleteFilled } from '@ant-design/icons'
import './style.css'

function CardItemCarrinho({ img, titulo, autor, preco, id, qtd }) {

    const {addQtdLivro, subQtdLivro, alteraQtdLivro, deletaLivro} = useListaCompra()

    return (
        <div className="lista-compra">
            <section className="card-livro_carrinho  grid-template-columns-4">
                <div>
                    <img id="img-livro" src={img} alt={titulo}></img>
                </div>
                <section>
                    <div>
                        <h1 className="titulo-min">{titulo}</h1>
                    </div>
                    <div>
                        <p>{autor}</p>
                    </div>
                </section>
                <div className="quantidade">
                    <button className="botao-qtd" onClick={() => subQtdLivro(id)}><span>-</span></button>
                    <input type="number" min="1" value={qtd} onChange={(val) => alteraQtdLivro(id, Number(val.target.value))} disabled></input>
                    <button  className="botao-qtd"  onClick={() => addQtdLivro(id)}><span>+</span></button>
                </div>
                <div className="preco-carrinho">
                    
                    <section className="delete" onClick={() => deletaLivro(id) }>
                    <DeleteFilled />
                    </section>
                    <h2>{formataValor(preco * qtd)}</h2>
                </div>                
            </section>
        </div>
    )
}

export default CardItemCarrinho
