import react from "react"
import porqueNutrecare1 from "../../assets/images/porqueNutrecare1.png"
import porqueNutrecare2 from "../../assets/images/porqueNutrecare2.png"
import porqueNutrecare3 from "../../assets/images/porqueNutrecare3.png"
import porqueNutrecare4 from "../../assets/images/porqueNutrecare4.png"
import "./style.css"


const Maquiagem = () => {
  return (
    <>


<section className="maquiagem">

          <p>Por que Nutre Care?</p>

          <h2>Maquiagem que faz bem</h2>
          <h2>pra você e pro planeta.</h2>

          <p>Nossos produtos nascem da natureza e voltam para ela sem deixar rastros.</p>

  <div className="grid">

    <div className="card">
      <img src={porqueNutrecare1} />
      <div className="overlay">
        <h3>Fórmulas limpas</h3>
      </div>
    </div>

    <div className="card">
      <img src={porqueNutrecare2} />
      <div className="overlay">
        <h3>Alta performance</h3>
      </div>
    </div>

    <div className="card">
      <img src={porqueNutrecare3} />
      <div className="overlay">
        <h3>Sustentável</h3>
      </div>
    </div>

    <div className="card">
      <img src={porqueNutrecare4} />
      <div className="overlay">
        <h3>Beleza consciente</h3>
      </div>
    </div>

  </div>

</section>
    </>
  )
}
export default Maquiagem
