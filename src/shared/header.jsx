import {Link} from "react-router-dom"
const Header = function (){
    return (
    <><section>
        <ul>
            <li><img className = "logo" src="link logo" alt="Logo Huellitas" /></li>
            <li><h1>Huellitas</h1></li>
            <li><Link to = "/inicio"><img className = "iconosheader"  src="Link Home" alt="Inicio"/></Link></li>
            <li><Link to = "/catalogo"><img className = "iconosheader" src="Link Catalogo" alt="Catalogo"/></Link></li>
            <li><Link to = "/contacto"><img className = "iconosheader" src="Link Contactanos" alt="Contáctanos"/></Link></li>
            <li><Link to = "/carrito"><img className = "iconosheader" src="Link CarritoCompras" alt="Carrito"/></Link></li>
            <li><Link to = "/admin"><img className = "iconosheader" src="Link Admin" alt="Administrador"/></Link></li>
        </ul>
    </section>
    <h2>"Porque tu mascota lo merece"</h2> </>
    )
}

export default Header