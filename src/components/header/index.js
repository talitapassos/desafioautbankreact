import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as UserSVG } from '../../assets/user.svg';
import { ReactComponent as ShoppingCart} from '../../assets/shopping-cart.svg'
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { AutoComplete } from 'antd';
import {useListaCompra} from '../../context/listaCompra';
import filtroOptions from '../../services/filtro-options'
import './style.css';

const Header = () => {
    const {listaCompra} = useListaCompra()
    return(
        <header className="main-header">
            <Link to='/'>
                <Logo id="img-logo"/>
            </Link>

            <AutoComplete
                style={{
                width: 400,
                }}
                options={filtroOptions}
                placeholder="Busque por um livro ou autor"
                filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />

            <div className="main-header_login">
                <UserSVG id="img-avatar" /> 
                <p id="login-frase">Olá, Talita.</p>
            </div>

            <Link to='/carrinho'>
            {listaCompra.length? 
            <Badge  className="numero-carrinho" count={listaCompra.reduce((total, {qtd})=> total+qtd, 0)}>
            <a href="#" className="head-example" />
            </Badge>
                : ''}
                <ShoppingCart id="img-carrinho" />
            </Link>
        </header>
    )
}


export default Header
