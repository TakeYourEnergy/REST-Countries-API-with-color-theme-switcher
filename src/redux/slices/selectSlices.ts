import {
   createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface Iregion {
   region: String
}

const initialState: Iregion = {
   region: ''
}

export const selectSlice = createSlice({
   name: '@@select',
   initialState,
   reducers: {
      selectAction: (state, action: PayloadAction<string>) => {
         state.region = action.payload
      },
      clearSelect: (state) => {
         state.region = ''
      }
   }
})

export const { selectAction, clearSelect } = selectSlice.actions