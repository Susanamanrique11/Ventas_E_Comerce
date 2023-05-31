import Header from "../shared/header"

const Catalogo = function () {
    return (<>
        <Header></Header>
        <section className="filtro_busqueda"></section>
        <section className="categorias"></section> {/*Botones*/}
        <section className="productos_a_mostrar"></section>
        <Footer></Footer>
    </>)
}

export default Catalogo