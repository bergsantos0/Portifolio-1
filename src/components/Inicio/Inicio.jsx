import React from 'react'
import * as S from "./InicioStyle";
import eu from '../../assets/img/eu.jpg';


export default function Inicio() {
    return (
        <S.ContainerInicio>
            <S.ContainerText>
                <h1>Olá meu nome e Gutemberg sou dev front-end </h1>
                <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
            </S.ContainerText>
            <img src={eu} alt="" />
        </S.ContainerInicio>







    )
}
