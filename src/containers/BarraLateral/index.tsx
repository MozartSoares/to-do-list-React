import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'
import { alteraTema } from '../../store/reducers/tema'
import { useEffect, useState } from 'react'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const [estaNoCadastro, setEstaNoCadastro] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/cadastro') {
      setEstaNoCadastro(true)
    } else {
      setEstaNoCadastro(false)
    }
  }, [location.pathname])

  const trocarTema = () => {
    dispatch(alteraTema())
  }

  return (
    <S.Aside isCadastroPage={estaNoCadastro}>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
              type="text"
              placeholder="Buscar"
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <S.BotaoRetorno
            isCadastroPage={estaNoCadastro}
            onClick={() => navigate('/')}
          >
            Voltar a lista de tarefas
          </S.BotaoRetorno>
        )}
        <S.BotaoTema isCadastroPage={estaNoCadastro} onClick={trocarTema}>
          Trocar tema
        </S.BotaoTema>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
