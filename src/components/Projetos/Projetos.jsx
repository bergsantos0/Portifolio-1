import React from 'react'
import * as S from '../../components/Projetos/ProjetosStyle'

import mec from '../../assets/img/mec.png'
import movies from '../../assets/img/movies.png'
import selfcare from '../../assets/img/selfcare.png'
export default function Projetos() {
  return (
    <S.ContainerProjeto>

      <S.CaixaProjeto>
        <img src={mec} alt="" />
        <a href="https://github.com/bergsantos0/desafio-MEC">
          <button>Ver Projeto</button>
        </a>
      </S.CaixaProjeto>
      <S.CaixaProjeto>
        <img src={movies} alt="" />
        <a href="https://github.com/bergsantos0/api-movies">
          <button>Ver Projeto</button>
        </a>
      </S.CaixaProjeto>
      <S.CaixaProjeto>
        <img src={selfcare} alt="" />
        <a href="https://github.com/bergsantos0/sefcare">
          <button>Ver Projeto</button>
        </a>
      </S.CaixaProjeto>



    </S.ContainerProjeto>
  )
}
