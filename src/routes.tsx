import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Produtos from "./components/Produtos";
import Produto from "./components/Produto";
import PaginaListaDeDesejos from "./pages/PaginaListaDeDesejos";
import PaginaCarrinho from "./pages/PaginaCarrinho";
import { Item } from "./utilidade/Item";

function RoutesAPP() {

  const [generoEProduto, setGeneroEProduto] = useState({
    genero: '',
    produto: ''
  })

  const [carrinho, setCarrinho] = useState<Item[]>([])

  return (
    <Router>
        <Menu setGeneroEProduto={setGeneroEProduto} carrinho={carrinho}/>
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="produtos" element={<Produtos generoEProduto={generoEProduto} setGeneroEProduto={setGeneroEProduto}/>}/>
            <Route path="produto/:id" element={<Produto carrinho={carrinho} setCarrinho={setCarrinho}/>}/>
            <Route path="lista-de-desejos" element={<PaginaListaDeDesejos carrinho={carrinho} setCarrinho={setCarrinho}/>}/>
            <Route path="carrinho" element={<PaginaCarrinho carrinho={carrinho} setCarrinho={setCarrinho}/>}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default RoutesAPP;