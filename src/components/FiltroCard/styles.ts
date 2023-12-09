import styled from 'styled-components'

type Props = {
  ativo: boolean
}
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? '#1e90ff' : props.theme.corBordaFiltro)};
  background-color: ${(props) =>
    props.ativo ? '#fff' : props.theme.corFundoFiltro};
  color: ${(props) => (props.ativo ? '#1e90ff' : props.theme.corTextoFiltro)};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
