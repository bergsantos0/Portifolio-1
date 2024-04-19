import React from 'react'
import Menu from '../../components/Menu/Menu'
import Inicio from '../../components/Inicio/Inicio'
import { StylePageDefault } from '../../components/stylePagesDefault/stylePagesDefault'

export function InicioPage() {
  return (
    <StylePageDefault>
      <Menu />
      <Inicio />
    </StylePageDefault>
  )
}


