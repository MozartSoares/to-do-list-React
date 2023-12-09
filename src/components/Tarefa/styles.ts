import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  status?: enums.Status
  prioridade?: enums.Prioridade
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: ${(props) => props.theme.corFundoCard};
  box-shadow: 0px 4px 4px ${(props) => props.theme.corBoxShadow};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }
`

export const Titulo = styled.h3`
  color: ${(props) => props.theme.corTexto};
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${(props) => props.theme.corDescricao};
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 24px;
  display: block;
  margin-bottom: 16px;
  width: 100%;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${(props) => props.theme.corDivisoriaBotoes};
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
