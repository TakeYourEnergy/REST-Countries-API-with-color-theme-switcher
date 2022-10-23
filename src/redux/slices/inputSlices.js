import {
   createSlice,
} from "@reduxjs/toolkit";

export const inputSlice = createSlice({
   name: '@@input',
   initialState: {
      search: ''
   },
   reducers: {
      setInput: (state, action) => {
         state.search = action.payload
      },
      clearInput: (state, action) => {
         state.search = ''
      }
   }
})

export const { setInput, clearInput } = inputSlice.actions