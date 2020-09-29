import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import ListaProvider from '../context/listaCompra'
import Carrinho from '../pages/carrinho'
import Home from '../pages/home'
import LivroDescricao from '../pages/livroDescricao'

const style= {
    height: '85%'
}

function Routes() {
    return (
        <ListaProvider>
            <Header />
            <>
                <Switch style={style}>
                    <Route path='/' exact component={Home} />
                    <Route  tyle={style} path='/carrinho' component={Carrinho} />
                    <Route path='/livro/:id' render={(props) => {
                    return ( <LivroDescricao {...props } />)
                }} />
                </Switch>
            </>
            <Footer />
        </ListaProvider>
    )
}

export default Routes
