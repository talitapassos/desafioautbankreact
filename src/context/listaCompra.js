import React, { createContext, useState, useContext } from 'react';

 const ListaCompraContext = createContext();


export default function ListaProvider({ children }){
    const  [listaCompra, setListaCompra] = useState([]);
    
    function addLivroCarrinho (livro) {
        const posicaoLivro = listaCompra.findIndex(item=> livro.id==item.id);
        if( posicaoLivro != -1){
            listaCompra[posicaoLivro].qtd++;
            setListaCompra(listaCompra);
        }
        else{
            const livroAdd = { ...livro, qtd: 1}
            setListaCompra([...listaCompra, livroAdd]) 
        }
    }

    function addQtdLivro(livroId) {
        const livroQtd = listaCompra.map(livro => {
            if(livro.id === livroId) {
                livro.qtd = livro.qtd + 1
            }
            return livro
        })
        setListaCompra(livroQtd)
    }

    function alteraQtdLivro(livroId, qtd) {
        const livroQtd = listaCompra.map(livro => {
            if(livro.id === livroId) livro.qtd = qtd
            return livro
        })
        setListaCompra(livroQtd)
    }

    function subQtdLivro(livroId) {
        const livroQtd = listaCompra.filter(livro => {
            if(livro.id === livroId) {
                livro.qtd = livro.qtd - 1
                if(livro.qtd <=0) return false;
            }
            return true;
        })
        setListaCompra(livroQtd)
    }

    

    return <ListaCompraContext.Provider value={
        {
         listaCompra,
         setListaCompra,
         addLivroCarrinho,
         addQtdLivro,
         subQtdLivro,
         alteraQtdLivro
        }
    }>{children}</ListaCompraContext.Provider>
}


export function useListaCompra(){
    const context = useContext(ListaCompraContext)  
    const { listaCompra, setListaCompra, addLivroCarrinho, addQtdLivro, subQtdLivro, alteraQtdLivro} = context;
    return { listaCompra, setListaCompra, addLivroCarrinho, addQtdLivro, subQtdLivro, alteraQtdLivro};
}