import React from "react";
import estilos from './Slider.module.css';

function Slider({imagenes}) {

    //  Variables y estados
    const [imagenActual, setImagenActual] = React.useState (0);
    const cantidad = imagenes?.length;

    //Return prematuro para evitar errores
    if (!Array.isArray (imagenes) || cantidad === 0)
    return;

    const siguienteImagen = () => {
        setImagenActual (imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
    }

    const anteriorImagen = () => {
        setImagenActual (imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
    }

    return (
        <section className={estilos.container}>
            <button className={estilos.boton} onClick={anteriorImagen} >‹</button>
            {imagenes.map((imagen, index) => {
                return (
                    <section 
                        className={imagenActual === index ? `${estilos.slide} ${estilos.active}` : estilos.slide}> 
                        {imagenActual === index && (<img key= {index} src= {imagen} alt="Promoción" />)}
                    </section>);})}
            <button className={estilos.boton} onClick={siguienteImagen}>›</button>
        </section>
    );
}

export default Slider