import { styled } from "styled-components"
import { Item } from "../../utilidade/Item"
import {FaTrash} from 'react-icons/fa'
import { useState } from 'react'

const ContainerCarrinho = styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 10rem;
    padding: 0.5rem;
    min-height: 50vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        .imagem{
            display: flex;
            width: 300px;
            img{
                width: 100%;
            }
        }
        .descricao{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .icon{
            svg{
                font-size: 1.2rem;
            }
        }
    }
    button{
        width: 40%;
        margin: 0 auto;
        margin: 2rem auto;
    }
    @media screen and (min-width: 1024px){
        width: 70%;
        margin: 3rem auto 0 auto;
        min-height: 73vh;
        align-items: center;
        gap: 4rem;
        h2{
            font-size: 2rem;
        }
        div{
            gap: 3rem;
            .imagem{
                width: 100px;
                height: 100px;
                img{
                    width: 100%;
                }
            }
            .descricao{
                gap: 2rem;
                span{
                    font-size: 1.5rem;
                }
            }
            .icon{
                align-items: center;
                svg{
                    font-size: 2rem;
                }
            }
            .icon:hover{
                cursor: pointer;
                color: gray;
            }
        }
        button{
            width: 20%;
            padding: 1rem;
        }
        button:hover{
            cursor: pointer;
        }
    }
`

interface Props {
    carrinho: Item[],
    setCarrinho: React.Dispatch<React.SetStateAction<Item[]>>
}
export default function PaginaCarrinho({carrinho, setCarrinho}: Props){

    const [compraFinalizada, setCompraFinalizada] = useState(false)

    function deletarCarrinho(item: Item){
        const novaLista = carrinho.filter(itemLista => itemLista.id !== item.id)
        setCarrinho(novaLista)
    }

    function finalizarCompra(){
        setCompraFinalizada(true)
        setCarrinho([])
    }

    return(
        <ContainerCarrinho>
            {compraFinalizada 
            ? <h3>Compra finalizado com sucesso!! Enviaremos um e-mail com mais detalhes.</h3> 
            : carrinho.length === 0
            ? <h2>Nao existe itens no carrinho</h2>
            : carrinho.map((item, index) => (
                <div key={index}>
                    <div className="imagem">
                        <img src={`/imagens/imagem${item.id}.png`} alt={item.titulo} />
                    </div>
                    <div className="descricao">
                        <h2>{item.titulo}</h2>
                        <p>{item.descricao}</p>
                        <span>Valor: R${item.preco},00</span>
                    </div>
                    <div className="icon">
                        <FaTrash onClick={() => deletarCarrinho(item)}/>
                    </div>
                </div>
            ))
        }
        {carrinho.length !== 0 && <button onClick={() => finalizarCompra()}>Finalizar compra</button>}
            
        </ContainerCarrinho>
    )
}