import { styled } from "styled-components"
import itens from '../../json/itens.json'
import Filtrar from "../Filtrar"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const ConteudoCategoriaContainer = styled.section`
    margin-top: 8rem;
    ul{
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
    }
    @media screen and (min-width: 1024px){
        margin-top: 0;
        display: grid;
        grid-template-columns: 20% 80%;
        ul{
            justify-content: flex-start;
            align-items: start;
            margin-left: 2rem;
            li{
                img{
                    width: 150px;
                    height: 150px;
                }
                button:hover{
                    cursor: pointer;
                }
            }
        }
    }
`

interface Props {
    generoEProduto: {genero: string, produto: string},
    setGeneroEProduto: React.Dispatch<React.SetStateAction<{
        genero: string;
        produto: string;
    }>>
}

export default function Produtos({ generoEProduto, setGeneroEProduto }: Props){
    const navigate = useNavigate()

    // const { genero, produto } = generoEProduto

    console.log(generoEProduto)

    const listaGenero = ['Masculino','Feminino','Infantil']
    const listaProduto = ['Camisa','Camiseta','Shorts']

    const [filtroGenero, setFiltroGenero] = useState('')
    const [filtroProduto, setFiltroProduto] = useState('')

    // const [ valorPadrao, setValorPadrao ] = useState({
    //     genero: 'masculino',
    //     produto: 'camisa'
    // })

    const generoClicado = itens.roupas.filter(item => {
        return item.genero.toLowerCase() === generoEProduto.genero.toLowerCase()
    })

    const generoECategoriaClicado = generoClicado.filter(item => {
        return item.categoria.toLowerCase() === generoEProduto.produto.toLowerCase()
    })

    console.log(filtroGenero, filtroProduto)

    return(
        <>
        <ConteudoCategoriaContainer>
            <Filtrar listaGenero={listaGenero} listaProduto={listaProduto} setFiltroGenero={setFiltroGenero} setFiltroProduto={setFiltroProduto} setGeneroEProduto={setGeneroEProduto} filtroGenero={filtroGenero} filtroProduto={filtroProduto}/>
            <ul>
                {generoECategoriaClicado.map((item, index) => (
                    <li key={index}>
                        <img src={`/imagens/imagem${item.id}.png`} width={100} height={100} alt={item.titulo}/>
                        <button onClick={() => navigate(`/produto/${item.id}`)}>Mais detalhes</button>
                    </li>
                ))}
            </ul>
        </ConteudoCategoriaContainer>
        </>
    )
}