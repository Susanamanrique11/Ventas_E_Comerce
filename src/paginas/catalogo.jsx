import Header from '../shared/header';
import Footer from '../shared/footer';
import datosproductos from './datosproductos.jsx';
import React, { useState } from "react";

const Catalogo = ({ datosproductos, category }) => {
  const listaProductos = datosproductos
    .filter((producto) => category === "all" || producto.category === category)
    .map((producto) => (
      <div key={producto.id}>
        <img src={producto.image} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.generalDescription}</p>
        <p>${producto.price}</p>
      </div>
    ));

  return <div>{listaProductos}</div>;
};

const ProductCatalog = () => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <Header />
      <div>
        <button onClick={() => handleCategoryChange("all")}>Todos</button>
        <button onClick={() => handleCategoryChange("Alimento")}>Alimento</button>
        <button onClick={() => handleCategoryChange("Ropa")}>Ropa</button>
        <button onClick={() => handleCategoryChange("Juguetes")}>Juguetes</button>
        <button onClick={() => handleCategoryChange("Accesorios")}>Accesorios</button>
      </div>
      <br></br>
      <Catalogo datosproductos={datosproductos} category={category} />
      <Footer />
    </>
  );
};

export default ProductCatalog;
