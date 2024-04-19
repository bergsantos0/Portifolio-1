import React from 'react'
import Menu from '../../components/Menu/Menu'
import Projetos from '../../components/Projetos/Projetos'
import { StylePageDefault } from '../../components/stylePagesDefault/stylePagesDefault'

export function ProjetosPage() {
    return (
        <StylePageDefault>
            <Menu />
            <Projetos />
        </StylePageDefault>

    )
}
