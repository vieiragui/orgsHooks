import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { carregaProdutores } from '../../../servicos/carregaDados'

export default function Produtores() {
  /*Hooks: é uma nova forma de implementação do React. Nele é possível utilizar funções
  ao invés de Classes para executar algo.
  useEffect é um Hook, ele executa apenas uma vez algo que estiver dentro das chaves*/

  useEffect(() => {
    const retorno = carregaProdutores()
    console.log(retorno)
  }, [])
  /*Deixando um array vazio no fim do useEffect, significa que tudo que esta no primeiro
    parametro será executado assim que o componente for carregado*/

  return <Text>Produtores</Text>
}
