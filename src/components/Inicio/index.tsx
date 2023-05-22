import { styled } from 'styled-components'
import json from '../../json/itens.json'
import { useNavigate } from 'react-router-dom'
// import imagem1 from '../../../../public/background/roupas1.jpg'

const ConteudoContainer = styled.main`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0;

  @media screen and (min-width: 1024px){
    margin-top: 0;
    padding: 0;
  }
  `

const ImageBackground = styled.div`
  img{
    width: 100%;
    height: 200px;
  }

  @media screen and (min-width: 1024px){
    img{
      height: 400px;
    }
  }
`

const MaisVendidosContainer = styled.section`
  h2{
    font-size: 1.3rem;
    text-align: center;
  }
  ul{
    overflow-x: scroll;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    li{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      button{
        width: 100%;
      }
    }
  }
`

const AdicionadosRecentementeContainer = styled.section`
  h2{
    font-size: 1.3rem;
    text-align: center;
  }
  ul{
    overflow-x: scroll;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    li{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      button{
        width: 100%;
      }
    }
  }
`

export default function Inicio() {
  const navigate = useNavigate()
  
  const produtos = json.roupas
  const mapProdutos = produtos.map(item => item)

  const adicionadosRecentemente = mapProdutos.splice(mapProdutos.length -10, 10)

  return (
    <ConteudoContainer>
      <ImageBackground>
        <img src='/background/roupas1.jpg' alt='imagem de roupas' />
      </ImageBackground>
          <MaisVendidosContainer>
            <h2>Mais vendidos</h2>
            <ul>
            {produtos.map((prod, index) => (
              <li key={index}>
                <img src={`/imagens/imagem${prod.id}.png`} width={100} height={100} alt={prod.titulo} />
                <button onClick={() => navigate(`/produto/${prod.id}`)}>Mais detalhes</button>
              </li>
            ))}
              <li>

              </li>
            </ul>
          </MaisVendidosContainer>

          <AdicionadosRecentementeContainer>
            <h2>Adicionados recentemente</h2>
            <ul>
              {adicionadosRecentemente.map((prod, index) => (
                <li key={index}>
                  <img src={`/imagens/imagem${prod.id}.png`} width={100} height={100} alt={prod.titulo} />
                  <button onClick={() => navigate(`/produto/${prod.id}`)}>Mais detalhes</button>
                </li>
              ))}
            </ul>
          </AdicionadosRecentementeContainer>
    </ConteudoContainer>
  )
}