import React, { Component } from 'react';
import api from '../../services/api'
import CardLivro from '../../components/CardLivro'
import  CarouselComponet from '../../components/Carousel';
import "./style.css"

const listaLivros = api.getLivros(); 

function Home() {
   
    return (   

        <>
        <CarouselComponet />
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

