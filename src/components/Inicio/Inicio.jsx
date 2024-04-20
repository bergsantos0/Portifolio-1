import React from 'react'
import * as S from "./InicioStyle";
import dev from '../../assets/img/dev.jpg';
import linkedin from '../../assets/img/linkedin.png'
import instagram from '../../assets/img/instagram.png'
export default function Inicio() {
    return (
        <S.ContainerInicio>
            <S.ContainerText>    
                Oi, eu sou <S.StyledName>Gutemberg Santos</S.StyledName>Desenvolvedor front-end
             <S.CaixaIcones>
        <a href="https://www.linkedin.com/in/gutemberg-santos-867002297/"><img src={linkedin} alt="" /></a>
        <a href="https://www.instagram.com/gutemberg__santos/#"><img src={instagram} alt="" /></a>
      </S.CaixaIcones>
            </S.ContainerText>
            <img src={dev} alt="" />
        </S.ContainerInicio>


    )
}
