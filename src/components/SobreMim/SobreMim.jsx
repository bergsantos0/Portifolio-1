import React from 'react'
import * as S from './SobreMimStyle'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import styled from '../../assets/img/styled.png'
export default function SobreMim() {
  return (
    <S.CaixaSobre>
      <h2>Olá,eu me chamo Gutemberg sou apaixonado por tecnologia e estou embarcando em uma emocionante jornada de aprendizado no curso 'Vai na Web', focado em programação front-end. Cada linha de código se torna um novo capítulo no meu fascinante mergulho no universo da criação de interfaces visuais e interativas para a web. Estou ansioso para absorver todo o conhecimento possível, explorando HTML, CSS e JavaScript para dar vida às minhas ideias. Com determinação e entusiasmo, estou construindo as bases para um futuro promissor no mundo da programação front-end.</h2>
      <h3>Habilidades</h3>
      <S.CaixaIcones>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={styled} alt="styled" />
      </S.CaixaIcones>


    </S.CaixaSobre>
  )
}
