import { styled } from "styled-components"
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { Item } from "../../utilidade/Item"
import { useEffect, useState, useContext } from "react"
import { ListaDeDesejosContext, ListaDeDesejosDispatchContext } from '../../context/ListaDeDesejos'
// import { CarrinhoContext, CarrinhoDispatchContext } from "../../context/Carrinho"

const ItemContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    .div-img{
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
            z-index: 10;
        }   
    }
    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: center;
        gap: 2rem;
        .div-img{
            width: 400px;
            img{
                height: 400px;
            }
        }
        .favorite:hover{
            cursor: pointer;
        }
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

    @media screen and (min-width: 1024px){
        gap: 1rem;
        position: relative;
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1.2rem;
            margin-top: 1rem;
        }
        span{
            font-size: 1.7rem;
            margin-top: 3rem;
        }
        button{
            position: absolute;
            bottom: 0;
            left: 25%;
        }
    }
`

interface Props {
    item: Item,
    carrinho: Item[],
    setCarrinho: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function CardProduto({item, carrinho, setCarrinho}: Props){

    const [isFavorite, setIsFavorite] = useState(false)

    const listaDeDesejosContext = useContext(ListaDeDesejosContext)
    const setListaDeDesejosContext = useContext(ListaDeDesejosDispatchContext)

    // const carrinhoContext = useContext(CarrinhoContext)
    // const setCarrinhoContext = useContext(CarrinhoDispatchContext)
    
    useEffect(() => {
        if(!listaDeDesejosContext?.length){
            console.log('effecttt')
            return setIsFavorite(false)
        }
        const hasItemInListaDesejos = listaDeDesejosContext.find(itemLista => itemLista.id === item.id)
        setIsFavorite(Boolean(hasItemInListaDesejos))
        console.log('item:' + hasItemInListaDesejos)
    },[isFavorite, listaDeDesejosContext, item])

    const favoritar = (item: Item) => {
        const hasItemInListaDesejos = listaDeDesejosContext.find(itemLista => itemLista.id === item.id)
        if(hasItemInListaDesejos){
            return
        }
        setListaDeDesejosContext([...listaDeDesejosContext, item])
    }
    
    const desfavoritar = (item: Item) => {
        console.log('sdfsdf')
        const hasItemInListaDesejos = listaDeDesejosContext.find(itemLista => itemLista.id === item.id)
        if(!hasItemInListaDesejos){
            return
        }
        const newList = listaDeDesejosContext.filter(itemLista => itemLista.id !== item.id)
        setListaDeDesejosContext(newList)
    }

    function adicionarNoCarrinho(item: Item){
        // setCarrinhoContext([...carrinhoContext, item])
        // console.log(carrinhoContext)
        const itemJaExistente = carrinho.some(itemLista => itemLista.id === item.id)
        if(!itemJaExistente){
            setCarrinho([...carrinho, item])
        } else {
            alert('Item já adicionado a sua lista')
        }
    }


    return(
        <ItemContainer>
            <div className="div-img">
                {isFavorite ? <MdOutlineFavorite className="favorite" onClick={() => desfavoritar(item)}/> : <MdFavoriteBorder className="favorite" onClick={() => favoritar(item)}/>}
                <img src={`/imagens/imagem${item.id}.png`} alt={item.titulo} />
            </div>
            <Descricao>
                <h2>{item.titulo}</h2>
                <p>{item.descricao}</p>
                <span>Valor: {item.preco},00</span>
                <button onClick={() => adicionarNoCarrinho(item)}>Adicionar ao carrinho</button>
            </Descricao>
        </ItemContainer>
    )
}