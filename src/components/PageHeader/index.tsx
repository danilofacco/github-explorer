import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { PageHeaderDiv,TopBar } from './styles';
import {GiHamburgerMenu} from 'react-icons/gi'

function PageHeader() {
  return (
    <>
    <TopBar>
      <div className="block_container">
      <div id="esquerda">
      <Link to="/">Dicas que te fazem bem</Link>
      <Link to="/">Mensagens de esperança</Link>
      </div>
      <div id="direita" >
      <Link to="/">Instagram</Link>
      <Link to="/">Facebook</Link>
      </div>
      </div>
    </TopBar>
    <div className="block_container">
      <PageHeaderDiv>
          <div id="esquerda">
            <img id="imagemLogo" src={Logo} />
          </div>
          <div id="direita" >
            <div id="desktop">
            <Link to="/quem-somos" >Quem somos </Link>
            <Link to="/conheca">Conheça</Link>
            <Link to="/contato"  >Fale Conosco</Link>
            <Link to="/portal-do-cliente">Portal do Cliente</Link>
            </div>
            <div id="mobile">
            <button><GiHamburgerMenu size={30}/></button>
            </div>
          </div>
    </PageHeaderDiv>
    </div>
    </>
  );
}

export default PageHeader