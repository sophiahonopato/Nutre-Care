import img1 from "../../assets/images/embalagem1.png"
import img2 from "../../assets/images/embalagem2.png"
import img3 from "../../assets/images/embalagem3.png"
import "./style.css"

const Embalagens = () => {
  return (
    <section className="embalagens">

      <div className="embalagens-container">

        {/* TEXTO */}
        <div className="embalagens-top">
          <h2>Embalagens que fazem a diferença</h2>
          <p>
            Pensadas para reduzir impactos e valorizar o ciclo natural,
            nossas embalagens unem design, inovação e responsabilidade ambiental.
          </p>
        </div>

        {/* IMAGENS */}
        <div className="embalagens-grid">

          <div className="emb-card">
            <img src={img1} alt="embalagem sustentável" />
            <h3>Biodegradável</h3>
            <p>Materiais que retornam à natureza sem agredir o meio ambiente.</p>
          </div>

          <div className="emb-card">
            <img src={img2} alt="embalagem reciclável" />
            <h3>Reciclável</h3>
            <p>Projetadas para reaproveitamento e redução de resíduos.</p>
          </div>

          <div className="emb-card">
            <img src={img3} alt="design ecológico" />
            <h3>Design consciente</h3>
            <p>Beleza e funcionalidade com impacto positivo.</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Embalagens