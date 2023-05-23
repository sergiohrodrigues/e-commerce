import { styled } from "styled-components"
import { Item } from "../../utilidade/Item"
import { MdOutlineFavorite } from 'react-icons/md'
import { ListaDeDesejosContext, ListaDeDesejosDispatchContext } from "../../context/ListaDeDesejos"
import { useContext } from 'react'

const ContainerListaDeDesejos = styled.section`
    width: 90%;
    margin: 8rem auto 2rem auto;
    min-height: 63vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    h2{
        margin-top: 3rem;
        font-size: 1.5rem;
        text-align: center;
    }
    div{
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    img{
        width: 100%;
    }
    button{
        padding: 0.5rem;
    }
    .favorite{
        position: absolute;
        right: 0;
        font-size: 2rem;
        padding: 0.5rem;
    }
}

    @media screen and (min-width: 1024px){
        margin: 2rem auto 0 auto;
        flex-direction: row;
        align-items: flex-start;
        min-height: 77vh;
        h2{
            width: 100%;
        }
        .favorite:hover{
            cursor: pointer;
        }
    }

`

interface Props {
    carrinho: Item[],
    setCarrinho: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function PaginaListaDeDesejos({carrinho, setCarrinho}: Props){
    const listaDeDesejosContext = useContext(ListaDeDesejosContext)
    const setListaDeDesejosContext = useContext(ListaDeDesejosDispatchContext)

    function removerItemDaLista(item: Item){
        const itemRemovido = listaDeDesejosContext.filter(it => it.id !== item.id)
        setListaDeDesejosContext(itemRemovido)
    }

    function adicionarNoCarrinho(item: Item){
        const itemJaExistente = carrinho.some(itemLista => itemLista.id === item.id)
        if(!itemJaExistente){
            setCarrinho([...carrinho, item])
        } else {
            alert('Item já adicionado a sua lista')
        }
    }

    return(
        <ContainerListaDeDesejos>
            {listaDeDesejosContext.length === 0
            ? <h2>Sem itens na Lista de Desejos</h2>
            : listaDeDesejosContext.map((item,index) => (
                <div key={index}>
                    <img src={`/imagens/imagem${item.id}.png`} alt="" />
                    <MdOutlineFavorite className="favorite" onClick={() => removerItemDaLista(item)}/>
                    <button onClick={() => adicionarNoCarrinho(item)}>Adicionar ao Carrinho</button>
                </div>
            ))
        }
        </ContainerListaDeDesejos>
    )
}