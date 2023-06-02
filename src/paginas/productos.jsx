import Header from '../shared/header'
import Footer from '../shared/footer'
import React from 'react'
import {Link, useParams } from 'react-router-dom'
import datosproductos from './datosproductos.jsx'
import { useEffect, useState } from 'react'
import ProductosStyle from '../estilos/productos.module.css'


const PaginaProducto = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
      useEffect(() => {
          (async () => {
              const data = datosproductos.find((product) => product.id == productId)
              setProduct(data) 
              console.log(data)
          })()
      },[])
    const {image, image2, image3, name, description, price, attributes} = product

  return (
  <section className={ProductosStyle.app}>
    <Header></Header>
        <section>
        <h1>{name}</h1>
        <br />
        <div className={ProductosStyle.productos_container}>
            <img src={image}  className={ProductosStyle.productos_item}/>
            {image2 && <img src={image2}  className={ProductosStyle.productos_item}/>}
            {image3 && <img src={image3}  className={ProductosStyle.productos_item}/>}
        </div>
        <br />
        <h3>Precio</h3>
        <p> ${price}</p>
        <h3>Descripción</h3>
        <p>{description}</p>
        <h3>Características adicionales</h3>       
        {attributes && Object.keys(attributes).map((key) => (
          <p key={key}>
            <strong>{key}: </strong>
            {attributes[key]}
          </p>
        ))}
        <br />
        <button className={ProductosStyle.button}> Añadir al carrito </button>
        <Link to='catalogo'>
            <button className={ProductosStyle.button}>Volver al catalogo</button>
        </Link>
        </section>
    <Footer></Footer>
    </section>
  );
};

export default PaginaProducto;