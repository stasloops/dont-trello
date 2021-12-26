import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
      cardState: [],
  },
  reducers: {
        setCurrentCard: (state, action) => {
           state.cardState.push(action.payload)
          
    },
        setDeleteСard: (state, action) => {
            state.cardState = state.cardState.filter(item => item.id !== action.payload)
    },
}

})

export const { setCurrentCard, setDeleteСard } = cardSlice.actions
export default cardSlice.reducer