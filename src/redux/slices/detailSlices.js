import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setDetailAction = createAsyncThunk(
   '@@detail/country',
   async (name) => {
      const resp = await axios.get(`https://restcountries.com/v2/name/${name}`)
      const data = resp.data
      return data
   }
)

export const setNeighbours = createAsyncThunk(
   '@@detail/neighbours',
   async (codes) => {
      const resp = await axios.get(`https://restcountries.com/v2/alpha?codes=${codes.join(',')}`)
      const data = resp.data
      return data
   }
)


export const detailSlice = createSlice({
   name: '@@detail',
   initialState: {
      country: [],
      neighbours: [],
      loading: 'idle'
   },
   reducers: {
      clearDetails: (state, action) => {
         state.country = [];
         state.neighbours = [];
         state.loading = 'idle'
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(setDetailAction.pending, (state, action) => {
            state.loading = 'loading';
         })
         .addCase(setDetailAction.fulfilled, (state, action) => {
            state.country = action.payload;
            state.loading = 'idle';
         })
         .addCase(setNeighbours.pending, (state, action) => {
            state.loading = 'loading';
         })
         .addCase(setNeighbours.fulfilled, (state, action) => {
            state.neighbours = action.payload;
            state.loading = 'idle';
         })
   }
})

export const { clearDetails } = detailSlice.actions