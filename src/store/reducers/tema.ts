import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type temaState = {
  estaUsandoTemaDark: boolean
}

const initialState: temaState = {
  estaUsandoTemaDark: false
}

const temaSlice = createSlice({
  name: 'tema',
  initialState,
  reducers: {
    alteraTema: (state) => {
      state.estaUsandoTemaDark = !state.estaUsandoTemaDark
    }
  }
})

export const { alteraTema } = temaSlice.actions

export default temaSlice.reducer
