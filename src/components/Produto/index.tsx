import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import itens from '../../json/itens.json'
import { Item } from "../../utilidade/Item"
import CardProduto from "../CardProduto"

const ProdutoContainer = styled.section`
    margin-top: 6.5rem;
    padding: 2rem 0;
    @media screen and (min-width: 1024px){
        min-height: 60vh;
    }
`

interface Props {
    carrinho: Item[],
    setCarrinho: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function Produto({carrinho, setCarrinho}: Props){
    const params = useParams()

    console.log(params)
    const itemClicado = itens.roupas.filter(item => {
        return item.id === Number(params.id)
    })

    return(
        <ProdutoContainer>
            {itemClicado.map((item)=> (
                <CardProduto key={item.id} item={{...item}} carrinho={carrinho} setCarrinho={setCarrinho}/>
            ))}
        </ProdutoContainer>
    )
}