import { configureStore } from '@reduxjs/toolkit'
import { heroApi } from './hero-reducer'
// import filterSlice from 'redux/selectSlice'

export const store = configureStore({
  reducer: {
    [heroApi.reducerPath]: heroApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    heroApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
})
