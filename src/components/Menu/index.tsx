import { useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsCart2 } from 'react-icons/bs'
import { styled } from 'styled-components'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import ModalMenu from './ModalMenu'
import { Link } from 'react-router-dom'

const MenuContainer = styled.header`
  position: relative;
`

const Section1 = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 0.5rem 0;
  a{
    text-decoration: none;
    color: #fff;
  }
  .input{
    margin-top: 0.1rem;
    position: absolute;
    top: 100%;
    z-index: 15;
    input{
      min-width: 300px;
      padding: 0.5rem 0;
    }
    .search{
      position: absolute;
      color: #000;
      z-index: 5;
      right: 0;
      margin-right: 0.5rem;
      font-size: 15px;
    }
  }
  div{
    display: flex;
    align-items: center;
    span{
      font-size: 0.8rem;
    }
  }
@media screen and (min-width: 1024px){
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  padding: 1rem 0;
  .input{
    position: relative;
    input{
      width: 300px;
      padding: 0.5rem;
    }
    .search{
      position: absolute;
      color: #000;
      z-index: 5;
      right: 0;
      margin-right: 0.5rem;
      font-size: 20px;
    }
  }
  div{
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
}
`;

const Section2 = styled.section`
  width: 100%;
  position: absolute;
  top: 200%;
  background-color: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  z-index: 999;
  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  ul{
    display: flex;
    gap: 0.5rem;
  }
@media screen and (min-width: 1024px){
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 0;
  position: relative;
  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  div:hover{
    cursor: pointer;
  }
  ul{
    display: flex;
    gap: 1rem;
    li:hover{
      cursor: pointer;
      color: #fff;
    }
  }
}
`

interface Props {
  setGeneroEProduto: React.Dispatch<React.SetStateAction<{
    genero: string;
    produto: string;
  }>>
}

export default function Menu({setGeneroEProduto}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MenuContainer>
      <Section1>
        <Link to='/'>
          <span>LOGO</span>
        </Link>
        <div className='input'>
          <input type="text" placeholder='O que voce procura hoje?'/>< AiOutlineSearch className='search'/>
        </div>
          <Link to='lista-de-desejos'>
            <div>
              <MdOutlineFavoriteBorder size={25}/>
                <span>Lista de Desejos</span>
            </div>
          </Link>
          <Link to='carrinho'>
            <BsCart2 size={25}/>
          </Link>
      </Section1>

      <Section2>
        <div onClick={() => setModalOpen(!modalOpen)}>
          <AiOutlineMenu />
          <span>Todas as categorias</span>
        </div>
        <ModalMenu modalOpen={modalOpen} setModalOpen={setModalOpen} setGeneroEProduto={setGeneroEProduto}/>
        <ul>
          <li>Masculino</li>
          <li>Feminino</li>
          <li>Infantil</li>
        </ul>
      </Section2>
    </MenuContainer>
  )
}
