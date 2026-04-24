import heroImg from "../../assets/images/porqueNutrecare1.png"
import "./style.css"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* TEXTO */}
        <div className="hero-text">

          <h1>
            Beleza que <br />
            <span>cuida de você</span><br />
            e do planeta
          </h1>

          <p>
            Maquiagens naturais, sustentáveis e de alta performance.
            Descubra uma nova forma de se cuidar com consciência.
          </p>

          <div className="hero-buttons">
            <Link to="/catalogo">
              <button className="btn-primary">Explorar produtos</button>
            </Link>

            <Link to="/sobrenos">
              <button className="btn-secondary">Nossa história</button>
            </Link>
          </div>

        </div>

        {/* IMAGEM */}
        <div className="hero-image">
          <img src={heroImg} alt="modelo nutre care" />
        </div>

      </div>

    </section>
  )
}

export default Main