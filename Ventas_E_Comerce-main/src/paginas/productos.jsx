import Header from '../shared/header'
import Footer from '../shared/footer'
import React from 'react'
import {Link, useParams } from 'react-router-dom'
import datosproductos from './datosproductos.jsx'
import { useEffect, useState } from 'react'

const PaginaProducto = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([])
      useEffect(() => {
          (async () => {
              const data = datosproductos.find((product) => product.id == productId)
              setProduct(data) 
              console.log(data)
          })()
      },[])
    const {image, image2, image3, name, description, price, attributes} = product

  return (<>
    <Header></Header>
        <section>
        <h1>{name}</h1>
        <br />
        <img src={image}/>
        {image2 && <img src={image2} />}
        {image3 && <img src={image3} />}
        <br />
        <p> ${price} <br />
            {description} <br />
        </p>
        {attributes && Object.keys(attributes).map((key) => (
          <p key={key}>
            <strong>{key}: </strong>
            {attributes[key]}
          </p>
        ))}
        <br />
        <Link to='carrito'>
            <button>Añadir al carrito</button>
        </Link>
        <Link to='catalogo'>
            <button>Volver al catalogo</button>
        </Link>
        </section>
    <Footer></Footer>
    </>
  );
};

export default PaginaProducto;