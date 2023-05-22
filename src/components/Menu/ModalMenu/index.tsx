import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const ModalContainer = styled.section<{display: string}>`
    width: 100%;
    background-color: gray;
    position: absolute;
    top: 50%;
    display: ${props => props.display};
    @media screen and (min-width: 1024px){
        width: 70%;
        height: auto;
        background-color: gray;
        display: ${props => props.display};
        position: absolute;
        top: 100%;
    }
`

const GenerosContainer = styled.section`
    height: 130px;
    ul{
        padding: 0 0.4rem;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem;
                margin: 0.5rem 0;
                border-radius: 1rem;
                color: #000;
                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
            }
        }
    @media screen and (min-width: 1024px){
        height: 130px;
        ul{
            margin-left: 1rem;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem;
                margin: 0.5rem 0;
                border-radius: 1rem;
                color: #000;
                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
            }
        }
    }
`

const CategoriasContainer = styled.section`
    margin-top: 1rem;
    padding: 1rem 0;
        span{
            font-size: 1.5rem;
        }
        ul{
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                width: 25%;
                padding: 0.5rem;
            }
            li:hover{
                color: #fff;
            }
        }
@media screen and (min-width: 1024px){
    margin-top: 1rem;
    height: 100%;
        span{
            font-size: 1.5rem;
        }
        ul{
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                padding: 0;
            }
            li:hover{
                color: #fff;
            }
        }
}
`

interface Props {
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setGeneroEProduto: React.Dispatch<React.SetStateAction<{
        genero: string;
        produto: string;
    }>>
}

interface Categorias {
    item: string
}

export default function ModalMenu({modalOpen, setModalOpen, setGeneroEProduto}: Props) {
    const navigate = useNavigate()
    
    const generos = [
        {
            genero: 'Masculino',
            imagem: '/generos/homem.png'
        },
        {
            genero: 'Feminino',
            imagem: '/generos/mulher.png'
        },
        {
            genero: 'Infantil',
            imagem: '/generos/crianca.png'
        }
    ]
    
    const [generoAtivo, setGeneroAtivo] = useState('Masculino')

    const [categorias, setCategorias ] = useState<Categorias[]>([])

    useEffect(() => {
        if(!generoAtivo){
            return
        }
        const Masculino = [
            {
                item: 'Camisa'
            },
            {
                item: 'Camiseta'
            },
            {
                item: 'Shorts'
            },
        ]
    
        const Feminino = [
            {
                item: 'Camisa'
            },
            {
                item: 'Blusa'
            },
            {
                item: 'Shorts'
            }
        ]

        const Infantil = [
            {
                item: 'Camisa'
            }
        ]

        switch (generoAtivo){
            case 'Masculino': 
            setCategorias(Masculino);
            break
            case 'Feminino': 
            setCategorias(Feminino);
            break
            case 'Infantil': 
            setCategorias(Infantil);
            break
            default:
            setCategorias([])
        }
    }, [generoAtivo])

    const selecionarCategoria = (item: string) => {
        setModalOpen(false)
        enviarDados()
        setGeneroEProduto({
            genero: generoAtivo,
            produto: item
        })
        navigate('/produtos')
    }
    
    function enviarDados(){
    }
    
    return (
        <ModalContainer display={modalOpen ? 'block' : 'none'} onMouseLeave={() => setModalOpen(false)}>
            <GenerosContainer>
                <ul>
                    {generos.map((item, index) => (
                        <li 
                            style={{ border: generoAtivo === item.genero ? '2px solid #fff' : 'none', color:'#000' }} 
                            key={index} 
                            onMouseEnter={() => setGeneroAtivo(item.genero)}
                        >
                            <img src={item.imagem} alt={String(item.imagem)} />
                            {item.genero}
                        </li>
                    ))}
                </ul>
            </GenerosContainer>

            <CategoriasContainer>
                <ul>
                    <span>Produtos</span>
                    {categorias.map((item, index) => (
                        <li 
                            key={index}
                            onClick={() => selecionarCategoria(item.item)}
                        >
                            {item.item}
                        </li>
                    ))}
                </ul>
            </CategoriasContainer>
        </ModalContainer>
  )
}
