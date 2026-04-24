import "./style.css"
import React from "react"


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h2>nutre care</h2>
        <p>
          Maquiagens que ajudam o meio ambiente,
          faça parte desse projeto com a gente!
        </p>
      </div>

      <div className="footer-center">
        <h3>Navegação</h3>
        <a href="#">Início</a>
        <a href="#">Produtos</a>
        <a href="#">Sobre nós</a>
        <a href="#">Embalagens</a>
      </div>

      <div className="footer-right">
        <input type="text" placeholder="Seu melhor gmail" />
        <button>Enviar</button>
      </div>

    </footer>
  )
}

export default Footer