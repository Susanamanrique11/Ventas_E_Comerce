import {Link} from "react-router-dom"
import admin from '../Logo/Admin.png'
import carrito from '../Logo/Carrito.png'
import catalogo from '../Logo/Catalogo.png'
import contactanos from '../Logo/ContactanosAvion.png'
import inicio from '../Logo/Inicio.png'
import logo_huellitas from '../Logo/logo_huellitas.png'

const Header = function (){
    return (
    <><section>
        <ul>
            <li><img className = "logo" src= {logo_huellitas} alt= "Logo Huellitas"/> </li>
            <li><h1>Huellitas</h1></li>
            <li><Link to = "/"><img className = "iconosheader"  src= {inicio} alt="Inicio"/></Link></li>
            <li><Link to = "/catalogo"><img className = "iconosheader" src= {catalogo} alt="Catalogo"/></Link></li>
            <li><Link to = "/footer"><img className = "iconosheader" src= {contactanos} alt="Contáctanos"/></Link></li>
            <li><Link to = "/carrito"><img className = "iconosheader" src= {carrito} alt="Carrito"/></Link></li>
            <li><Link to = "/admin"><img className = "iconosheader" src= {admin} alt="Administrador"/></Link></li>
        </ul>
    </section>
    <h2>"Porque tu mascota lo merece"</h2> </>
    )
}

export default Header