import React from 'react';
import './style.css';
import {
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled,
    YoutubeFilled
  } from '@ant-design/icons'


const Footer = () => (
    <footer className="main-footer">
        <div className="main-footer_container">

            <section className="main-footer_listas">
                <section className="lista">
                <h1 className="lista-titulo">Sobre nós</h1>
                <ul>
                    <li>Quem somos</li>
                    <li>Trabalhe conosco</li>
                    <li>Localização das lojas</li>
                </ul>
                </section>

                <section className="lista">
                <h1 className="lista-titulo">Serviços</h1>
                <ul>
                    <li>Cartão Atenas</li>
                    <li>Retire na loja</li>
                    <li>Garantia estendida</li>
                </ul>
                </section>
               
               <section className="lista">
               <h1 className="lista-titulo">Central de atendimento</h1>
                <ul>
                    <li>Ouvidoria</li>
                    <li>Política de vendas</li>
                    <li>Política de privacidade</li>
                    <li>Política de troca e devoluçao</li>
                </ul> 
               </section>   
</section>
                <section className="redes-sociais">
                    <h1 className="redes-sociais_titulo">Redes Sociais</h1>
                    <div className="redes-sociais_icones">
                    <FacebookFilled  className="svg"/>
                    <TwitterSquareFilled  className="svg"/>
                    <InstagramFilled  className="svg"/>
                    <YoutubeFilled  className="svg"/>
                    </div>
                </section>    
        </div>
    </footer>
);

export default Footer