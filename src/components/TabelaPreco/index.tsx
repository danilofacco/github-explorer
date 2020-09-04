import React from 'react';
import imagem from "../../assets/images/intermedicina-convenio-de-saude-contratos-familia.png"
import { TabelaPrecoDiv } from './styles'
import { Link } from 'react-router-dom';
export default function TabelaPreco() {

  return (
    <TabelaPrecoDiv>
      <img src={imagem} />

      <span className="title">
        Intermedicina Individual.
             </span>
      <span className="price">
        R$ 40,00
             </span>
      <span className="price_title">
        POR MÊS
             </span>
             <ul>
               <li>Para você cuidar da sua saúde</li>
               <li>Atendimento Médico</li>
               <li>Atendimento Odontológico</li>
               <li>Exames e Laboratórios</li>
             </ul>
             <Link className="buttonRed" to="/" >Contratar</Link>


    </TabelaPrecoDiv>
  );
}