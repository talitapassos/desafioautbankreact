import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import user from '../../assets/user.svg';
import shoppingCart from '../../assets/shopping-cart.svg'
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="main-header">
        <Link to='/'>
            <img id="img-logo" src={logo} alt="Logo Atenas Livraria"></img>
        </Link>
        <div className="main-header_login">
            <img id="img-avatar" src={user} alt="Avatar"></img>
            <p id="login-frase">Olá, Talita.</p>
        </div>
        <Link to='/carrinho'>
            <img id="img-carrinho" src={shoppingCart} alt="Carrinho"></img>
        </Link>
    </header>
)

export default Header
