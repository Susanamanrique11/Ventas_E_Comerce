import { Link } from "react-router-dom";
import Slider from "./components/slider/Slider"
import datosproductos from "./datosproductos"
import InicioStyle from "../estilos/inicio.module.css"

const Inicio = function () {

    const mockImagenes = [
        'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/350137268_266705115850352_3281274137451578827_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=p0Qq9axITIgAX9WL0iN&_nc_ht=scontent.fbog3-2.fna&oh=00_AfBVfw9JpxJcmp8Vo6r9Cjinplyhwyx52pvoVPJqko29-w&oe=647D94E4',
        'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/350242045_2321150394722998_7141478070980466698_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=VSoRbhH96dwAX9ujklL&_nc_ht=scontent.fbog3-2.fna&oh=00_AfC_BeSMiWtYuWKXh15ryDnHpH8TTtWcStopX39qHDdYtw&oe=647CCBA6',
        'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/350255617_1001715284601939_5231825082315580286_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=qZm5e23UqIgAX8UwxgL&_nc_ht=scontent.fbog3-2.fna&oh=00_AfAaLlOaFnbgA2QHRp-PEcGSTIf8u2RsI6jNvutFIWw-cQ&oe=647DC8E8',
    ];

    const elemento1 = datosproductos[0];
    const elemento2 = datosproductos[5];
    const elemento3 = datosproductos[9];
    const elemento4 = datosproductos[14];


    return(<>
    <section className="promociones"> {/*Carrusel con links*/}
        <Slider imagenes={mockImagenes} />
    </section>
    <section className="productos_destacados">  {/*Flexbox con links*/}
        <section>
            <ul>
                <li>{elemento1.name}</li>
                <li>{elemento1.generalDescription}</li>
                <li><img src={elemento1.image} alt="" /></li>
                <li>{elemento1.description}</li>
                <li>{elemento1.price}</li>
                <li>{elemento1.attributes.size}</li>
                <li>{elemento1.attributes.nutritionInfo}</li>
                <li>{elemento1.attributes.flavors}</li>
            </ul>
            <ul>
                <li>{elemento2.name}</li>
                <li>{elemento2.generalDescription}</li>
                <li><img src={elemento2.image} alt="" /></li>
                <li>{elemento2.description}</li>
                <li>{elemento2.price}</li>
                <li>{elemento2.attributes.size}</li>
            </ul>
            <ul>
                <li>{elemento3.name}</li>
                <li>{elemento3.generalDescription}</li>
                <li><img src={elemento3.image} alt="" /></li>
                <li>{elemento3.description}</li>
                <li>{elemento3.price}</li>
            </ul>
            <ul>
                <li>{elemento4.name}</li>
                <li>{elemento4.generalDescription}</li>
                <li><img src={elemento4.image} alt="" /></li>
                <li>{elemento4.description}</li>
                <li>{elemento4.price}</li>
                <li>{elemento4.attributes.colors}</li>
                <li>{elemento4.attributes.characteristics}</li>
            </ul>
        </section>
    </section>
    <section className="ir_catalogo"> {/*Botón*/}
        <button className={InicioStyle.bcatalogo}> <Link to = "/catalogo"/></button>
    </section>
    </>)
}

export default Inicio