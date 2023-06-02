import {Link} from "react-router-dom"
import admin from '../Logo/Admin.png'
import carrito from '../Logo/Carrito.png'
import catalogo from '../Logo/Catalogo.png'
import contactanos from '../Logo/ContactanosAvion.png'
import inicio from '../Logo/Inicio.png'
import logo_huellitas from '../Logo/logo_huellitas.png'
import HeaderStyle from '../estilos/header.module.css'

const Header = function (){
    return (
    <><section className={HeaderStyle.header}>
        <ul>
            <li><img className = {HeaderStyle.logo} src= {logo_huellitas} alt= "Logo Huellitas"/> </li>
            <li className={HeaderStyle.titulo}><h1>Huellitas</h1></li>
            <li className={HeaderStyle.inicio}><Link to = "/"><img className = {HeaderStyle.iconos} src= {inicio} alt="Inicio"/></Link></li>
            <li className={HeaderStyle.catalogo}><Link to = "/catalogo"><img className = {HeaderStyle.iconos_especiales} src= {catalogo} alt="Catalogo" /></Link></li>
            <li className={HeaderStyle.contactanos}><Link to = "/footer"><img className = {HeaderStyle.iconos} src= {contactanos} alt="Contáctanos"/></Link></li>
            <li className={HeaderStyle.carrito}><Link to = "/carrito"><img className = {HeaderStyle.iconos} src= {carrito} alt="Carrito"/></Link></li>
            <li className={HeaderStyle.admin}><Link to = "/admin"><img className = {HeaderStyle.iconos} src= {admin} alt="Administrador"/></Link></li>
        </ul>
        <h2 className={HeaderStyle.slogan} >"Porque tu mascota lo merece"</h2> 
    </section>
    </>
    )
}

export default Header