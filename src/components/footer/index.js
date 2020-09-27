import React from 'react';
import './style.css';

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
        </div>
    </footer>
);

export default Footer