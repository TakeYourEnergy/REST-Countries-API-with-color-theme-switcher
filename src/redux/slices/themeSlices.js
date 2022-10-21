import {
   createSlice,
} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
   name: '@@theme',
   initialState: 'dark',
   reducers: {
      toggleTheme: (state, action) => {
         return state = action.payload
      }
   }
})

export const { toggleTheme } = themeSlice.actions
