import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import itens from '../../json/itens.json'
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'

const ProdutoContainer = styled.section`
    margin-top: 6.5rem;
    padding: 2rem 0;
`

const ItemContainer = styled.div`
width: 90%;
margin: 0 auto;
position: relative;
    img{
        width: 100%;
        height: 300px;
    }
    .favorite{
        position: absolute;
        right: 0;
        padding: 0.5rem;
        font-size: 2rem;
    }
`

const Descricao = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    button{
        width: 50%;
        margin: 0 auto;
        padding: 0.5rem;
    }
`

export default function Produto(){
    const params = useParams()

    const itemClicado = itens.roupas.filter(item => {
        return item.id === Number(params.id)
    })

    console.log(itemClicado)
    return(
        <ProdutoContainer>
            {itemClicado.map((item, index)=> (
                <ItemContainer key={index}>
                    <div>
                        <MdFavoriteBorder className="favorite" />
                        <img src={`/imagens/imagem${item.id}.png`} alt="" />
                    </div>
                    <Descricao>
                        <p>{item.titulo}</p>
                        <p>{item.descricao}</p>
                        <span>Valor: {item.preco},00</span>
                        <button>Adicionar ao carrinho</button>
                    </Descricao>
                </ItemContainer>
            ))}
        </ProdutoContainer>
    )
}