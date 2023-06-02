import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../shared/header";
import Footer from "../shared/footer";
import datosproductos from "./datosproductos";
import CarritoStyle from '../estilos/carrito.module.css'

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    // Verificar que el productId sea un número válido antes de agregarlo al carrito
    if (!isNaN(productId) && productId > 0) {
      const producto = datosproductos.find((item) => item.id === parseInt(productId));
      if (producto) {
        addToCart(producto); // Agregar el producto al carrito
      }
    }
  }, [productId]);

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const removeFromCart = (producto) => {
    const updatedCart = carrito.filter((item) => item.id !== producto.id);
    setCarrito(updatedCart);
  };

  const renderCartItems = () => {
    if (carrito.length === 0) {
      return <p>No hay productos en el carrito</p>;
    }

    return carrito.map((producto) => (
      <div key={producto.id} className={CarritoStyle.carrito}>
        <img src={producto.image} alt={producto.name}/>
        <p>{producto.name}</p>
        <p>Precio: ${producto.price}</p>
        <button onClick={() => removeFromCart(producto)}>Eliminar</button>
      </div>
    ));
  };

  return (
    <div className={CarritoStyle.general}>
      <Header />
      <h2>Carrito de Compras</h2>
      {renderCartItems()}
      <Footer />
    </div>
  );
};

export default Carrito;