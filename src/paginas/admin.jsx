import Header from '../shared/header'
import Footer from '../shared/footer'

import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const users = ["Felipe", "Susana", "Diana", "Natalia"]

const Entrar = function (){
  const [error, setError] = useState("");
  const form = useRef();
  const navigate = useNavigate();

  const access = async function (e) {
    e.preventDefault();

    let texto = document.getElementById('username').value;
    if (texto == users[0] || texto == users[1] || texto == users[2] || texto == users[3]){
      navigate("/agregar");
    }else{
        setError("El usuario ingresado no es válido !!");
    }
    

  }

  return (
    <>
      <form ref={form} onSubmit={access}>
        <h2>Accede con tu usuario Huellitas</h2>
        <fieldset>
          <label>Usuario: </label>
          <input type="text" id="username" name="username" />
        </fieldset>
        {error && error != "" ? <p>{error}</p> : null}
        <button>Ingresar</button>
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