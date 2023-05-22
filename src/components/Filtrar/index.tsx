import { styled } from "styled-components"
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useState } from "react"

interface Props {
    display : string
}

const ArticleContainer = styled.article`
    width: 90%;
    margin: 0 auto;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
    position: relative;
    @media screen and (min-width: 1024px){
        margin-top: 1rem;
        padding-top: 2rem;
        h2{
            .arrow-mobile{
                display: none;
            }
        }
    }
    `

const Filtro = styled.section<Props>`
    background-color: gray;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    section{
        background-color: #bababa;
        display: ${props => props.display};
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.5rem;
    }
    section legend{
        margin-bottom: 0.5rem;
    }
    section div{
        display: flex;
        align-items: center;
    }
    button{
        padding: 0.5rem;
        margin: -1rem auto 0 auto;
        width: 30%;
    }
    @media screen and (min-width: 1024px){
        position: static;
        height: 75vh;
        button{
            margin-top: 1rem;
        }
        section{
            display: flex;
        }
    }
`

interface PropsSecundary {
    listaGenero: string[],
    listaProduto: string[],
    setFiltroGenero: React.Dispatch<React.SetStateAction<string>>,
    setFiltroProduto: React.Dispatch<React.SetStateAction<string>>,
    setGeneroEProduto: React.Dispatch<React.SetStateAction<{
        genero: string;
        produto: string;
    }>>,
    filtroGenero: string,
    filtroProduto: string
}

export default function Filtrar({listaGenero, listaProduto, setFiltroGenero, setFiltroProduto, setGeneroEProduto, filtroGenero, filtroProduto}: PropsSecundary){
    const [ filtrar, setFiltrar ] = useState(false)
    
    const [ disableInput, setDisableInput ] = useState(false)

    function Filtrar (){
        setFiltrar(false)
        setGeneroEProduto({
            genero: filtroGenero,
            produto: filtroProduto
        })
        limparFiltros()
    }

    function limparFiltros(){
        setFiltroGenero('')
        setFiltroProduto('')
    }

    interface PropsInput{
        event: React.MouseEvent<HTMLInputElement, MouseEvent>
    }

    function desativarOutrosInputs(event: PropsInput){
        console.log('desativadosss')
    }

    return(
        <ArticleContainer>
            <h2 onClick={() => setFiltrar(!filtrar)}>Filtrar por: <AiOutlineArrowDown className="arrow-mobile"/></h2>
            <Filtro display={filtrar ? 'flex' : 'none'}>
                <section>
                    <legend>Gênero</legend>
                    {listaGenero.map((item, index) => (
                        <div key={index}>
                            <input 
                                type="checkbox" 
                                name={item} 
                                value={item} 
                                onChange={(event) => setFiltroGenero(event.target.name)}
                            />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
                </section>
                <section>
                    <legend>Tipo de produto</legend>
                    {listaProduto.map((item, index) => (
                        <div key={index}>
                            <input 
                                type="checkbox" 
                                name={item} 
                                value={item} 
                                onChange={(event) => setFiltroProduto(event.target.name)}
                            />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
                <button onClick={() => Filtrar()}>Filtrar</button>
                </section>
            </Filtro>
        </ArticleContainer>
    )
}