import { configureStore } from '@reduxjs/toolkit'
import { heroApi } from './hero-reducer'
import { setupListeners } from '@reduxjs/toolkit/query'

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

setupListeners(store.dispatch)
