import Slider from "./components/slider/Slider"
/*import datosproductos, {datosproductos} from "./datosproductos";*/

const Inicio = function () {

    const mockImagenes = [
        'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/350137268_266705115850352_3281274137451578827_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=p0Qq9axITIgAX9WL0iN&_nc_ht=scontent.fbog3-2.fna&oh=00_AfBVfw9JpxJcmp8Vo6r9Cjinplyhwyx52pvoVPJqko29-w&oe=647D94E4',
        'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/350242045_2321150394722998_7141478070980466698_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=VSoRbhH96dwAX9ujklL&_nc_ht=scontent.fbog3-2.fna&oh=00_AfC_BeSMiWtYuWKXh15ryDnHpH8TTtWcStopX39qHDdYtw&oe=647CCBA6',
        'https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/350255617_1001715284601939_5231825082315580286_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=qZm5e23UqIgAX8UwxgL&_nc_ht=scontent.fbog3-2.fna&oh=00_AfAaLlOaFnbgA2QHRp-PEcGSTIf8u2RsI6jNvutFIWw-cQ&oe=647DC8E8',
    ];

    /*const elemento1 = document.getElementById ("1");*/

    return(<>
    <section className="promociones"> {/*Carrusel con links*/}
        <Slider imagenes={mockImagenes} />
    </section>
    <section className="productos_destacados">  {/*Flexbox con links*/}
        <section>
           
        </section>
    </section>
    <section className="ir_catalogo"> {/*Botón*/}
    </section>
    </>)
}

export default Inicio