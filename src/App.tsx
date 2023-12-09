import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import temaDark from './themes/dark'
import temaLight from './themes/light'
import { useSelector } from 'react-redux'
import { RootReducer } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  const { tema } = useSelector((state: RootReducer) => state)

  return (
    <ThemeProvider theme={tema.estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </ThemeProvider>
  )
}

export default App
