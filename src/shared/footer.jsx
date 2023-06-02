import {Link} from "react-router-dom"
const Footer = function (){
    return (
        <section className="Contáctame">
        <h2 className="Titulo_Contactame">Contáctame</h2>
            <form className="Formulariocontactame" action="">
                    <label htmlFor="name">Name:</label>
                    <input name="name" className="input-box margin" type="text" placeholder="Ingresa tu nombre" required />

                    <label htmlFor="email">Email:</label>
                    <input name="email" className="input-box margin" type="email" placeholder="Ingresa tu email" required />

                    <label htmlFor="phone">Teléfono (opcional):</label>
                    <input name="phone" className="input-box margin" type="tel" placeholder="Ingresa tu numero de celular" />

                    <label htmlFor="message">Mensaje: </label>
                    <textarea name="message" className="input-box margin" type="mensaje" placeholder="Escribe tu mensaje" required></textarea>

                    <input className="button-submit" type="submit"/>
                    <li><Link to = "/"><p>Volver al Inicio</p></Link></li>
            </form>
    </section> 
    )
}

export default Footer