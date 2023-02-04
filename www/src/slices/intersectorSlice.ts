import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IntersectorState {
    isIntersecting: boolean,
}

const initialState: IntersectorState = {
    isIntersecting: false,
}

export const intersectorSlice = createSlice({
    name: 'intersector',
    initialState,
    reducers: {
        observeElement: (state, action: PayloadAction<IntersectorState['isIntersecting']>) => {
            state.isIntersecting = action.payload
        },
    },
})

export const { observeElement, } = intersectorSlice.actions

export const selectIsIntersecting = (state: RootState) => state.interseting.isIntersecting;

export default intersectorSlice.reducer