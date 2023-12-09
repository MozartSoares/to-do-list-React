import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${(props) => props.theme.corDeFundo};

  @media (max-width: 768px) {
    display: block;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 90vh;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.corDeFundo};

  @media (max-width: 768px) {
    height: 900px;
  }
`
export const Titulo = styled.h2`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  display: block;
  color: ${(props) => props.theme.corTexto};
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #eee;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  background-color: ${variaveis.azul};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
