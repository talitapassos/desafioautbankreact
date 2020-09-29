import api from './api'
import React from 'react';
import { Link } from 'react-router-dom';

const dados = api.getLivros();

const itemStyle ={

    display: 'flex',
    flexDirection: 'row',
}

const imgStyle={
    height: 40,
    paddingRight: '25px',  
}

const descStyle={
    display: 'flex',
    flexDirection: 'column',
    color: 'black'
}

const filtroOptions =dados.map((livro, index) =>{
    return {
        value: livro.titulo,
        options:[renderItem(livro, index)]
    }
})


function renderItem ({ titulo, img, autor, id }, index) {
    return{
    value:`${titulo} - ${autor}`,
    label: (
      <Link to={'/livro/'+id}>
        <section className="grid grid-template-columns-1" key={index}>
      
            <div style={itemStyle}>
                <img
                    style={imgStyle}
                    alt="livro"
                    src={img}
                />

                <div  style={descStyle}>
                    <strong>{titulo}</strong>
                    <span>{autor}</span>
                </div>

            </div>
        </section>
        </Link>
    )
    }
}


export default filtroOptions;