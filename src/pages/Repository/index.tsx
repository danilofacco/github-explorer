import React, {useEffect,useState} from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import {Header,RepositoryInfo,Issues} from './styles'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

interface RepositoryParams{
    repository:string
}
const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>()
useEffect(()=>{
    api.get(`/repos/${params.repository}`).then(response =>{
        console.log(response.data)
    })

    api.get(`/repos/${params.repository}/issues`).then(response =>{
        console.log(response.data)
    })
 

},[params.repository])

    return(<>
    <Header>
    <img src={logoImg} alt='Github Explorer' />
    <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
        </Link>
      
    </Header>

    <RepositoryInfo>
        <header>
            <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="Nome"/>
            <div>
                <strong>Rocketseat/Teste</strong>
                <p>descricao do repositorio</p>
            </div>
        </header>
        <ul>
            <li>
              <strong>1808</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>48</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>67</strong>
              <span>Issues Abertas</span>
            </li>
        </ul>
    </RepositoryInfo>

    <Issues>
    <Link  to={'dasdasda'}>
                     <div>
                        <strong>dsadasdasasd</strong>
                        <p>adasdsad</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
    </Issues>
    </>)
}
export default Repository