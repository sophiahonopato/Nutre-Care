import { Link } from "react-router-dom"
import "./style.css"

const Header = () => {
  return (
    <header className="header">

      <div className="header-container">

       
       
        <Link to="/" className="logo">
          nutre <span>care</span>
        </Link>

        {/* MENU */}
        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/catalogo">Produtos</Link>
          <Link to="/sobrenos">Sobre</Link>
          <Link to="/embalagens">Embalagens</Link>
        </nav>

        {/* BOTÃO */}
        <div className="header-actions">
          <button>Comprar</button>
        </div>

      </div>

    </header>
  )
}

export default Header