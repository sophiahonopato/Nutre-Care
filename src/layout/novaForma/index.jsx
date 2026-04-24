import bannerImg from "../../assets/images/bannerContato.png"
import "./style.css"
import { Link } from "react-router-dom"
import react from "react"

const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-overlay">

        <div className="banner-content">

          <h1>
            UMA NOVA FORMA <br />
            <span>DE SE MAQUIAR</span>
          </h1>

          <p>
            Beleza consciente, com resultado que você vê
            e sente todos os dias.
          </p>

          <Link to="/catalogo">
            <button>VER PRODUTOS</button>
          </Link>

        </div>

      </div>
    </section>
  )
}

export default Banner