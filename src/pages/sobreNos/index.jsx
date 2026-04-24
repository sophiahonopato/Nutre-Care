import img from "../../assets/images/espro.png"
import "./style.css"

const Sobre = () => {
  return (
    <section className="sobre">

      <div className="sobre-container">

        {/* IMAGEM */}
        <div className="sobre-img">
          <img src={img} alt="nutre care" />
        </div>

        {/* TEXTO */}
        <div className="sobre-text">

          <span className="tag">Nossa essência</span>

          <h2>
            Mais do que beleza, <br />
            <span>um propósito</span>
          </h2>

          <p>
            A Nutre Care nasceu a partir de um projeto desenvolvido por uma turma
            do FMT 01313, formada por mulheres empoderadas que acreditam na força
            da beleza consciente.
          </p>

          <p>
            Nosso objetivo é unir estética, sustentabilidade e inovação, criando
            produtos que cuidam de você e do planeta ao mesmo tempo.
          </p>

          {/* NÚMEROS */}
          <div className="sobre-stats">
            <div>
              <h3>100%</h3>
              <span>Sustentável</span>
            </div>

            <div>
              <h3>8+</h3>
              <span>Produtos</span>
            </div>

            <div>
              <h3>1</h3>
              <span>Propósito</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Sobre