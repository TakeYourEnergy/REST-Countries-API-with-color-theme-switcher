import {
   createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface Isearch {
   search: string
}

const initialState: Isearch = {
   search: ''
}

export const inputSlice = createSlice({
   name: '@@input',
   initialState,
   reducers: {
      setInput: (state, action: PayloadAction<string>) => {
         state.search = action.payload
      },
      clearInput: (state) => {
         state.search = ''
      }
   }
})

export const { setInput, clearInput } = inputSlice.actions