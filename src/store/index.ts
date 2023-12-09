import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'
import temaReducer from './reducers/tema'

const Store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer,
    tema: temaReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
