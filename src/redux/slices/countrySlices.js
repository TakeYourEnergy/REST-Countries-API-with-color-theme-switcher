import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setCountyAction = createAsyncThunk(
   '@@country/set',
   async () => {
      const resp = await axios.get('https://restcountries.com/v2/all?fields=name,capital,flags,population,region')
      const data = await resp.data
      return data
   }
)


export const countrySlice = createSlice({
   name: '@@country',
   initialState: {
      country: [],
      loading: 'idle',
   },
   extraReducers: (builder) => {
      builder
         .addCase(setCountyAction.pending, (state, action) => {
            state.loading = 'loading'
         })
         .addCase(setCountyAction.fulfilled, (state, action) => {
            state.country = action.payload;
            state.loading = 'idle'
         })
   }
})

export const {} = countrySlice.actions