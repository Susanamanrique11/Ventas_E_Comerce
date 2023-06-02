import {Link} from "react-router-dom"
import FooterStyle from '../estilos/footer.module.css'
const Footer = function (){
    return (
        <section className={FooterStyle.footer}>
        <h2 className={FooterStyle.titulo_contactame}>Contáctame</h2>
            <form className={FooterStyle.formulario_contactame} action="">
                    <label htmlFor="name">Name:</label>
                    <input name="name" className={FooterStyle.input_box_margin} type="text" placeholder="Ingresa tu nombre" required />

                    <label htmlFor="email">Email:</label>
                    <input name="email" className={FooterStyle.input_box_margin} type="email" placeholder="Ingresa tu email" required />

                    <label htmlFor="phone">Teléfono (opcional):</label>
                    <input name="phone" className={FooterStyle.input_box_margin} type="tel" placeholder="Ingresa tu numero de celular" />

                    <label htmlFor="message">Mensaje: </label>
                    <textarea name="message" className={FooterStyle.input_box_margin} type="mensaje" placeholder="Escribe tu mensaje" required></textarea>
                    <p></p>
                    <input className={FooterStyle.button_submit}type="submit"/>
                    <p><Link to = "/"><p>Volver al Inicio</p></Link></p>
            </form>
    </section> 
    )
}

export default Footer