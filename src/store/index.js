import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './addCardSlise/addCardSlise'

export const store = configureStore({
  reducer: {
    card: cardReducer
  },
})