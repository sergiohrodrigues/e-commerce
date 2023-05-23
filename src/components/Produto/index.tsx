import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import itens from '../../json/itens.json'
import { Item } from "../../utilidade/Item"
import CardProduto from "../CardProduto"

const ProdutoContainer = styled.section`
    margin-top: 6.5rem;
    padding: 2rem 0;
    @media screen and (min-width: 1024px){
        min-height: 62vh;
    }
`

interface Props {
    iconFavorite: boolean,
    setIconFavorite: React.Dispatch<React.SetStateAction<boolean>>,
    listaDeDesejos: Item[],
    setListaDeDesejos: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function Produto({iconFavorite, setIconFavorite, listaDeDesejos, setListaDeDesejos}: Props){
    const params = useParams()

    const itemClicado = itens.roupas.filter(item => {
        return item.id === Number(params.id)
    })

    return(
        <ProdutoContainer>
            {itemClicado.map((item)=> (
                <CardProduto key={item.id} item={{...item}} iconFavorite={iconFavorite} setIconFavorite={setIconFavorite} listaDeDesejos={listaDeDesejos} setListaDeDesejos={setListaDeDesejos}/>
            ))}
        </ProdutoContainer>
    )
}