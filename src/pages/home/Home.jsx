import React, { Component } from 'react';

import "./style.css"
import api from '../../services/api'
import CardLivro from '../../components/CardLivro'
import Carrinho from '../../pages/carrinho'

const listaLivros = api.getLivros(); 

function Home(value) {
   
   
    return (   
        <>
        <section className="livro-container">
        {listaLivros.map(livro=>{
            return <CardLivro key={livro.id}
            id={livro.id} img={livro.img} titulo={livro.titulo} autor={livro.autor} preco={livro.preco}
            />
         })}
         </section>
        </>
    );
}

 
export default Home;

