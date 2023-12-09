import styled from 'styled-components'
import { Botao } from '../../styles'

export const Aside = styled.aside<{ isCadastroPage?: boolean }>`
  padding: 16px;
  background-color: ${(props) => props.theme.corBarraLateral};
  height: 100vh;

  @media (max-width: 768px) {
    height: ${(props) => (props.isCadastroPage ? '25vh' : '55vh')};
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const BotaoRetorno = styled(Botao)<{ isCadastroPage?: boolean }>`
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
`

export const BotaoTema = styled(Botao)<{ isCadastroPage?: boolean }>`
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isCadastroPage ? '24px' : '20px')};
    width: ${(props) => (props.isCadastroPage ? '100%' : '')};
  }
`
