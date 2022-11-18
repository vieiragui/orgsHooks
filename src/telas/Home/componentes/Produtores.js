import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { carregaProdutores } from '../../../servicos/carregaDados'

export default function Produtores({ topo: Topo }) {
  /*Hooks: é uma nova forma de implementação do React. Nele é possível utilizar funções
  ao invés de Classes para executar algo.
  useEffect é um Hook, ele executa apenas uma vez algo que estiver dentro das chaves*/

  //Primeira posição do array é a variável e o Segundo é a função que vai alterá-lo
  const [titulo, setTitulo] = useState('')
  const [lista, setLista] = useState([])

  useEffect(() => {
    const retorno = carregaProdutores()
    setTitulo(retorno.titulo)
    setLista(retorno.lista)
  }, [])
  /*Deixando um array vazio no fim do useEffect, significa que tudo que esta no primeiro
    parametro será executado assim que o componente for carregado*/

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    )
  }

  /*data é a informação que quero exibir.
    renderItem recebe o valor que quero renderizar. 
    listHeaderComponent é o titulo que quero colocar na página*/
  return (
    <FlatList
      data={lista}
      renderItem={({ item: { nome } }) => <Text>{nome}</Text>}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={TopoLista}
    />
  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646'
  }
})
