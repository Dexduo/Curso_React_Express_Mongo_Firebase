import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 100 }

export const idSlice = createSlice({
    name: "id",
    initialState: initialState, // como tem o msm nome poderia colocar simplesmente initialState
    reducers: {
        incrementar: (state) => { state.value += 1 },
        decrementar: (state) => { state.value -= 1 },
        incrementarValor: (state, action) => { state.value += action.payload },
        decrementarValor: (state, action) => { state.value -= action.payload }
    }
})

export const { incrementar, decrementar, incrementarValor, decrementarValor } = idSlice.actions
export default idSlice.reducer