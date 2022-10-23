import {
   createSlice,
} from "@reduxjs/toolkit";

export const selectSlice = createSlice({
   name: '@@select',
   initialState: {
      region: ''
   },
   reducers: {
      selectAction: (state, action) => {
         state.region = action.payload
      },
      clearSelect: (state, action) => {
         state.region = ''
      }
   }
})

export const { selectAction, clearSelect } = selectSlice.actions