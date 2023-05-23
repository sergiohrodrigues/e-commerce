import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Produtos from "./components/Produtos";
import Produto from "./components/Produto";
import { Item } from "./utilidade/Item";
import PaginaListaDeDesejos from "./pages/PaginaListaDeDesejos";
import PaginaCarrinho from "./pages/PaginaCarrinho";

function RoutesAPP() {

  const [generoEProduto, setGeneroEProduto] = useState({
    genero: '',
    produto: ''
  })

  const [iconFavorite, setIconFavorite] = useState(false)
  const [listaDeDesejos, setListaDeDesejos] = useState<Item[]>([])

  return (
    <Router>
        <Menu setGeneroEProduto={setGeneroEProduto}/>
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="produtos" element={<Produtos generoEProduto={generoEProduto} setGeneroEProduto={setGeneroEProduto}/>}/>
            <Route path="produto/:id" element={<Produto iconFavorite={iconFavorite} setIconFavorite={setIconFavorite} listaDeDesejos={listaDeDesejos} setListaDeDesejos={setListaDeDesejos}/>}/>
            <Route path="lista-de-desejos" element={<PaginaListaDeDesejos listaDeDesejos={listaDeDesejos} setListaDeDesejos={setListaDeDesejos}/>}/>
            <Route path="carrinho" element={<PaginaCarrinho />}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default RoutesAPP;