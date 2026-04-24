import produto1 from "../../assets/images/porqueNutrecare1.png"
import produto2 from "../../assets/images/porqueNutrecare2.png"
import produto3 from "../../assets/images/porqueNutrecare3.png"
import produto4 from "../../assets/images/porqueNutrecare4.png"
import produto5 from "../../assets/images/produto1.png"
import produto6 from "../../assets/images/produto2.png"
import produto7 from "../../assets/images/produto3.png"
import produto8 from "../../assets/images/produto4.png"
import "./style.css"
import { Link } from "react-router-dom"

const Catalogo = () => {
  return (
    <section className="catalogo">

      <h2>Nosso catálogo</h2>
      <p>Produtos naturais, sustentáveis e de alta performance</p>

      <div className="catalogo-grid">

        {[produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8].map((img, i) => (
          <div className="catalogo-card" key={i}>
            <img src={img} alt="produto" />
            <h3>Produto Natural</h3>
            <span>R$ 79,90</span>
<Link to="/produto">
  <button>Ver produto</button>
</Link>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Catalogo;