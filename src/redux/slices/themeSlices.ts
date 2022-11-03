import {
   createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
   name: '@@theme',
   initialState: 'dark',
   reducers: {
      toggleTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
         return state = action.payload
      }
   }
})

export const { toggleTheme } = themeSlice.actions
