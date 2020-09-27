import React, { Component } from 'react';
import {useListaCompra} from '../../context/listaCompra';
import { formataValor } from '../../utils/intl';
import "./style.css";

function CardLivro(props) { 

    const {addLivroCarrinho} = useListaCompra();
    

    return (               
        <section className="card-livro">
            <div>
                <img id="img-livro" src={props.img} alt={props.titulo}></img>
            </div>
            <div>
                <h1 className="titulo">{props.titulo}</h1>
            </div>
            <div>
                <p>{props.autor}</p>
            </div>
            <div>
                <h2>{formataValor(props.preco)}</h2>
            </div>
            <div>
                <a className="botao-comprar" 
                    onClick={()=> addLivroCarrinho(props)}>Comprar</a>
            </div>
            
        </section>
    );
}

 
export default CardLivro;