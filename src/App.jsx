import { Link } from "react-router-dom" 
import Header from './shared/header'
import Footer from './shared/footer'
import Inicio from './paginas/inicio'
import AppStyle from './app.module.css'


function App() {

  return (
    <section className={AppStyle.app}>
      <Header />
      <Inicio />
      <Footer />
    </section>
  )
}

export default App
