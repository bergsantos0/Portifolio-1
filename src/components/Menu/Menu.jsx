import React from 'react'

import * as S from './MenuStyle';
import { Link } from 'react-router-dom';


export default function Menu() {
  return (

    <S.MenuContainer>
      <S.Caixa>
          
        <nav>
          <S.ContainerUl>
            <li><Link to="/" >Inicio</Link></li>
            <li><Link to="/SobreMim" >Sobre mim</Link></li>
            <li><Link to="/Projetos" >Projetos</Link></li>
          </S.ContainerUl>
        </nav>
      </S.Caixa>
    
    </S.MenuContainer>
  )
}
