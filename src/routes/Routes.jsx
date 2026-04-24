import { Route, Routes } from "react-router-dom"
import Home from "../home/index.jsx"
import Catalogo from "../pages/catalogo/index.jsx"
import Produto from "../pages/produto/index.jsx"
import Embalagens from "../pages/embalagens/index.jsx"
import Sobre from "../pages/sobreNos/index.jsx"

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/embalagens" element={<Embalagens />} />
      <Route path="/sobrenos" element={<Sobre />} />
    </Routes>
  )
}

export default RoutesApp
