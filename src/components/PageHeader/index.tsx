import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { PageHeaderDiv } from './styles';
import {GiHamburgerMenu} from 'react-icons/gi'

function PageHeader() {
  return (
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
  );
}

export default PageHeader