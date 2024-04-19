import React from 'react'
import eu from '../../assets/img/eu.jpg';
import * as S from './MenuStyle';
import { Link } from 'react-router-dom';
import { Line } from '../Line/Line';
import instagram from '../../assets/img/instagram.png'
import linkedin from '../../assets/img/linkedin.png'
import whatsapp from '../../assets/img/whatsapp.png'

export default function Menu() {
  return (

    <S.MenuContainer>
      <S.Caixa>
        <S.ContainerImg >
          <img src={eu} alt="" />
          <p>Gutemberg</p>
          <p>Front-end Developer</p>
        </S.ContainerImg>           
        <nav>
          <S.ContainerUl>
            <Line />
            <li><Link to="/" >Inicio</Link></li>
            <Line />
            <li><Link to="/SobreMim" >Sobre mim</Link></li>
            <Line />
            <li><Link to="/Projetos" >Projetos</Link></li>
            <Line />
          </S.ContainerUl>
        </nav>
      </S.Caixa>
      <S.CaixaIcones>
        <a href="https://www.linkedin.com/in/gutemberg-santos-867002297/"><img src={linkedin} alt="" /></a>
        <a href="https://www.instagram.com/gutemberg__santos/#"><img src={instagram} alt="" /></a>
        <a href="https://api.whatsapp.com/send/?phone=558193769783&text&type=phone_number&app_absent=0"><img src={whatsapp} alt="" /></a>
      </S.CaixaIcones>
    </S.MenuContainer>
  )
}
