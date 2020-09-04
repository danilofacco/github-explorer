import React, { useState, useEffect, FormEvent } from 'react'
import api from '../../services/api'

 
import PageHeader from '../../components/PageHeader'
import SliderHome from '../../components/SliderHome'
import DividerLine from '../../components/DividerLine'
import TabelaPreco from  '../../components/TabelaPreco'
import { Container, TreeColumns,ClickToAction } from './styles'
import {SiWhatsapp} from 'react-icons/si'

 


const Home: React.FC = () => {
 
    return (
        <>
            <PageHeader />
            <SliderHome />

            <div className="block_container">
                <Container>
                    <div className="block">
                        <h2>Convênio de Saúde Intermedicina</h2>
                        <DividerLine />
                        <span>
                            Intermedicina é o Convênio de Saúde que vai <strong>Acompanhar, Intermediar e Facilitar</strong> consultas ou procedimentos médicos, odontológicos e laboratoriais particulares com o melhor <strong>custo-benefício</strong>.
                        </span>
                    </div>
                </Container>
            <TreeColumns>
                <TabelaPreco/>
                <TabelaPreco/>
                <TabelaPreco/>
            </TreeColumns>

            <ClickToAction>
            <a className="buttonGreen" href="/" ><SiWhatsapp size={20}/>Contratar</a>
            <h3>Você tem empresa? Solicite uma proposta!</h3>
            <p>Para grupo empresarial temos uma proposta personalizada para os seus colaboradores.</p>
            </ClickToAction>

            </div>

        </>
    )
}
export default Home