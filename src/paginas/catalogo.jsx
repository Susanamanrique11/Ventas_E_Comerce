import Header from '../shared/header'
import Footer from '../shared/footer'
import datosproductos from './datosproductos.jsx'
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import CatalogoStyle from '../estilos/catalogo.module.css'

const Catalogo = ({ datosproductos, category }) => {
    const listaProductos = datosproductos
    .filter((producto) => category === "all" || producto.category === category)
    .map((producto) => (
        <section key={producto.id} className={CatalogoStyle.catalogo_item}>
        <Link to={`/catalogo/${producto.id}`}>
            <img src={producto.image} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>{producto.generalDescription}</p>
            <p>${producto.price}</p>
            <Link to={`/catalogo/${producto.id}/carrito`}>
                <button className={CatalogoStyle.button}>Añadir al carrito</button>
            </Link>
        </Link>
      </section>
    ));

    return <section className={CatalogoStyle.catalogo_container}>{listaProductos}</section>;
};

const ProductCatalog = () => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <section className={CatalogoStyle.app}>
      <Header />
      <section>
        <button onClick={() => handleCategoryChange("all")}>Todos</button>
        <button onClick={() => handleCategoryChange("Alimento")}>Alimento</button>
        <button onClick={() => handleCategoryChange("Ropa")}>Ropa</button>
        <button onClick={() => handleCategoryChange("Juguetes")}>Juguetes</button>
        <button onClick={() => handleCategoryChange("Accesorios")}>Accesorios</button>
      </section>
      <br></br>
      <Catalogo datosproductos={datosproductos} category={category} />
      <Footer />
    </section>
  );
};

export default ProductCatalog;