import React, { Component } from 'react';
import images from '../../services/CarouselService';
import { Carousel } from 'antd';
import './style.css'

export default function CarouselComponent() {
    return (   

        <>
        <section>
            <Carousel autoplay>
                {images.map((image)=>(
                    <div><h3 className="content-style"><img className="image-style" src={image}></img> </h3></div>)
                    )}
               
            </Carousel> 
        </section>
        </>
    );
}

 

