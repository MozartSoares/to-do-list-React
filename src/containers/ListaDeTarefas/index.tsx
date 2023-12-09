import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles/index'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementoMensagem =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      if (quantidade > 1 || quantidade === 0) {
        mensagem = `${quantidade} tarefas marcadas como: todas ${complementoMensagem}`
      } else {
        mensagem = `${quantidade} tarefa marcada como: todas ${complementoMensagem}`
      }
    } else {
      if (quantidade > 1 || quantidade === 0) {
        mensagem = `${quantidade} tarefas marcadas como ${`${criterio}: ${valor}`} ${complementoMensagem} `
      } else {
        mensagem = `${quantidade} tarefa marcada como ${`${criterio}: ${valor}`} ${complementoMensagem} `
      }
    }

    return mensagem
  }

  const quantidadeTarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(quantidadeTarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {quantidadeTarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
