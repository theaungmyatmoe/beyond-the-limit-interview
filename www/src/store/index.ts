import { configureStore } from '@reduxjs/toolkit'
import intersetingReducer from '../slices/intersectorSlice'

export const store = configureStore({
    reducer: {
        interseting: intersetingReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch