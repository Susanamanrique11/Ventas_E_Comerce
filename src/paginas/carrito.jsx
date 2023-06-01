import Header from '../shared/header'
import Footer from '../shared/footer'

const Carrito = function () {
    return (<>
        <Header></Header>
        <section className="productos_comprados"></section>
        <section className="resumen_pedido"></section>
        <Footer></Footer>
    </>)
}

export default Carrito