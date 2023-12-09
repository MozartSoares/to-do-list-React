import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  BotaoFormulario,
  CampoFormulario,
  Form,
  Opcao,
  Opcoes,
  TituloFormulario
} from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { MainContainer } from '../../styles'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <TituloFormulario>Nova tarefa</TituloFormulario>
      <Form onSubmit={cadastrarTarefa}>
        <CampoFormulario
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <CampoFormulario
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        ></CampoFormulario>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="Prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoFormulario type="submit">Cadastrar</BotaoFormulario>
      </Form>
    </MainContainer>
  )
}

export default Formulario
