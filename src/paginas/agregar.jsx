import Header from '../shared/header'
import Footer from '../shared/footer'
import AgregarStyle from '../estilos/agregar.module.css'
import datosproductos from './datosproductos.jsx'
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


export var newproduct = {
    id: 0,
    name: "",
    category: "",
    generalDescription: "",
    image: "",
    image2: "",
    image3: "",
    description: "",
    price: 0,
    
}

const Add = function (){
  const navigate = useNavigate();

    const access = async function (e) {
        e.preventDefault();
    
        newproduct.id = datosproductos.length + 1;
        newproduct.name = document.getElementById('name').value;
        newproduct.category = document.getElementById('category').value;
        newproduct.generalDescription = document.getElementById('description').value;
        newproduct.description = document.getElementById('description').value;
        newproduct.image = document.getElementById('image').value;
        newproduct.price = document.getElementById('price').value;

        datosproductos.push(newproduct);
        navigate("/catalogo");
    }

    return(<>
    <form className={AgregarStyle.form} onSubmit={access}>
        <h2>Completa el formulario para añadir un nuevo producto</h2>

        <fieldset>
          <label>Nombre: </label>
          <input className={AgregarStyle.input_box_margin} type="text" id="name" name="name" />
        </fieldset>

        <fieldset>
          <label>Categoría: </label>
          <input className={AgregarStyle.input_box_margin} type="text" id="category" name="category" />
        </fieldset>

        <fieldset>
          <label>Descripción: </label>
          <input className={AgregarStyle.input_box_margin} type="text" id="description" name="description" />
        </fieldset>

        <fieldset>
          <label>URL de imagen: </label>
          <input className={AgregarStyle.input_box_margin} type="url" id="image" name="image" />
        </fieldset>

        <fieldset>
          <label>Precio: </label>
          <input className={AgregarStyle.input_box_margin} type="number" id="price" name="price" />
        </fieldset>

        <p></p>
        <button className={AgregarStyle.button_submit}>Subir producto e ir al catálogo</button>
    </form>
    


    </>)
}


const Agregar = function () {
    return (<>
        <section className={AgregarStyle.general}>
        <Header></Header>

        <section className={AgregarStyle.agregar}>
            <Add></Add> 
        </section>

        <Footer></Footer>
        </section>
    </>)
}


export default Agregar
