import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Produtos from "./components/Produtos";
import Produto from "./components/Produto";

function RoutesAPP() {
  const [generoEProduto, setGeneroEProduto] = useState({
    genero: '',
    produto: ''
  })

  return (
    <Router>
        <Menu setGeneroEProduto={setGeneroEProduto}/>
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="produtos" element={<Produtos generoEProduto={generoEProduto} setGeneroEProduto={setGeneroEProduto}/>}/>
            <Route path="produto/:id" element={<Produto />}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default RoutesAPP;