import Header from '../shared/header'
import Footer from '../shared/footer'

import React, { useContext, useEffect, useRef, useState } from "react";
import AdminContext from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Entrar = function (){
    const [error, setError] = useState("");
    const form = useRef();
    const { admin, setAdmin } = useContext(AdminContext);
    const navigate = useNavigate();
    useEffect(
      function () {
        if (admin) {
            return navigate("/agregar");
        }
      },
      [admin]
    );

    const access = async function (e) {
        e.preventDefault();
        const consulta = await fetch("https://jsonplaceholder.typicode.com/users");
        const respuesta = await consulta.json();
        const search = respuesta
          .map(function (usuario) {
            return usuario.username;
          })
          .find(function (username) {
            return username == e.target.elements.username.value;
          });
        if (search && search != null && search != undefined) {
          setAdmin(
            respuesta.find(function (usuario) {
              return usuario.username == search;
            })
          );
          navigate("/agregar");
        } else {
          setError("El usuario ingresado no es válido !!");
        }
      };
      return (
        <>
          <form
            ref={form}
            onSubmit={access}
          >
            <h2>Log In</h2>
            <h3>Inicia sesión con tu usuario autorizado de Huellitas</h3>
            <fieldset>
              <label htmlFor="username">Usuario: </label>
              <input type="text" id="username" name="username" />
            </fieldset>
            {error && error != "" ? <p>{error}</p> : null}
            <button>Entrar</button>
          </form>
        </>
      );
}

const Admin = function () {
    return (<>
        <Header></Header>

        <section className="login">
            <Entrar></Entrar> 
        </section>

        <Footer></Footer>
    </>)
}

export default Admin