import styled from 'styled-components'
import { BotaoSalvar, Campo, Titulo } from '../../styles'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  text-align: center;

  textarea {
    resize: none;
    margin: 16px 0;
    @media (max-width: 768px) {
      font-size: 20px;
      resize: vertical;
      height: 200px;
    }
  }
`

export const TituloFormulario = styled(Titulo)`
  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`

export const CampoFormulario = styled(Campo)`
  @media (max-width: 768px) {
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 6px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  label {
    margin-right: 6px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-right: 12px;
    }
  }
`

export const BotaoFormulario = styled(BotaoSalvar)`
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 24px;
    width: 100%;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
