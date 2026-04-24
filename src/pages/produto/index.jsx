import Produto1 from "../../assets/images/produto1.png";
import "./style.css";

const Produto = () => {
  return (
    <div className="container">

      <div className="content-main">

        {/* IMAGEM */}
        <div className="produto">
          <img src={Produto1} alt="produto" />
        </div>

        {/* INFO */}
        <div className="container-produtos">

          <div className="infoProduto">
            <h1>CONDICIONADOR SÓLIDO NUTRE CARE</h1>
            <p>Contém 20g</p>
            <h2>R$ 50,90</h2>
          </div>

          {/* QUANTIDADE */}
          <div className="quantity-buy">
            <div className="counter">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="btn-buy">
              Comprar agora
            </button>
          </div>

          {/* DESCRIÇÃO */}
          <div className="descricao">
            <p><strong>Descrição:</strong></p>
            <p>
              O Condicionador Nutre Care nutre profundamente, reduz o frizz e devolve brilho e maciez aos fios. Com fórmula natural e embalagem sustentável, oferece cuidado completo para seus cabelos e para o planeta.
            </p>
          </div>

        </div>

      </div>

      {/* DETALHES EMBAIXO */}
      <div className="detalhes-produto">
        <p><strong>Produto:</strong></p>
        <p>O Condicionador Nutre Care foi desenvolvido para proporcionar hidratação profunda, nutrição e proteção aos fios de forma natural e equilibrada.

Com ativos de origem vegetal, ele atua diretamente na fibra capilar, restaurando a saúde dos cabelos, reduzindo o frizz e devolvendo brilho e maciez desde a primeira aplicação.

Sua fórmula leve é indicada para todos os tipos de cabelo, promovendo cuidado diário sem pesar nos fios.</p>

        <p><strong>Textura e fixação:</strong></p>
        <p>Sua textura cremosa e suave facilita a aplicação e garante uma distribuição uniforme por todo o comprimento dos fios. O produto é rapidamente absorvido, proporcionando hidratação sem deixar resíduos ou sensação pesada.

A fixação dos nutrientes na fibra capilar ajuda a manter os cabelos alinhados, disciplinados e protegidos ao longo do dia, mesmo em ambientes com umidade ou exposição ao sol.</p>

        <p><strong>Versatilidade:</strong></p>
        <p>O Condicionador Nutre Care pode ser utilizado no dia a dia, em diferentes rotinas de cuidado capilar. É ideal para todos os tipos de cabelo, desde os mais lisos até os mais volumosos ou ondulados.

Pode ser usado após o shampoo, como etapa principal de hidratação, ou combinado com outros tratamentos capilares para potencializar os resultados. Sua fórmula equilibrada permite o uso frequente sem agredir os fios ou o couro cabeludo.</p>
      </div>

    </div>
  );
};

export default Produto;