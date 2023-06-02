import { Link } from "react-router-dom" 
import Header from './shared/header'
import Footer from './shared/footer'
import Inicio from './paginas/inicio'
import AppStyle from './App.module.css'


function App() {

  return (
    <><section className={AppStyle.app}>
    <Header /*className = {estilos.header}*/ />
    <Inicio />
    <Footer />
    </section></>
  )
}

export default App
