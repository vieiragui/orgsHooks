import produtores from '../mocks/produtores'
import topo from '../mocks/topo'

//sem ser default possibilita eu importar dentro das chaves
export const carregaProdutores = () => {
  return produtores
}

export const carregaTopo = () => {
  return topo
}
