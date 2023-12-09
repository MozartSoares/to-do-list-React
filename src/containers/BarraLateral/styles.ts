import styled from 'styled-components'
import { Botao } from '../../styles'

export const Aside = styled.aside<{ isCadastroPage?: boolean }>`
  padding: 16px;
  background-color: ${(props) => props.theme.corBarraLateral};
  height: 100vh;

  @media (max-width: 768px) {
    height: ${(props) => (props.isCadastroPage ? '20vh' : '40vh')};
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
    font-size: 32px;
    width: 100%;
  }
`

export const BotaoTema = styled(Botao)<{ isCadastroPage?: boolean }>`
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isCadastroPage ? '32px' : '20px')};
    width: ${(props) => (props.isCadastroPage ? '100%' : '')};
  }
`
