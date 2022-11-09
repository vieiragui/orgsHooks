import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { carregaTopo } from '../../../servicos/carregaDados' //como não estou exportando como default preciso usar chaves
import logo from '../../../assets/logo.png'

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: ''
    }
  }

  atualizaTopo() {
    const retorno = carregaTopo()
    this.setState({ topo: retorno })
  }

  componentDidMount() {
    this.atualizaTopo()
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image style={estilos.imagem} source={logo} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16
  },
  imagem: {
    width: 70,
    height: 28
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26
  }
})

export default Topo
