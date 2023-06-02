import React, { useState } from "react";

const Carrito = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (producto) => {
    const nuevosProductos = productos.filter((p) => p.id !== producto.id);
    setProductos(nuevosProductos);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {productos.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.name} - ${producto.price}
              <button onClick={() => eliminarProducto(producto)}>
                Retirar del carrito
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;