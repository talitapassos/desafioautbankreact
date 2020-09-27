import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import ListaProvider from '../context/listaCompra'
import Carrinho from '../pages/carrinho'
import Home from '../pages/home'
import './style.css'

function Routes() {
    return (
        <ListaProvider>
            <Header />
            <div className="contentSample">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/carrinho' component={Carrinho} />
                </Switch>
            </div>
            <Footer />
        </ListaProvider>
    )
}

export default Routes
