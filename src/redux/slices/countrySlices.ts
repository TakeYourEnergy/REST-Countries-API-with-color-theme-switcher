import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ICountries {
   capital: string;
   flags: { png: string, svg: string };
   independent: boolean;
   name: string;
   population: number;
   region: string;
}

export const setCountyAction = createAsyncThunk(
   '@@country/set',
   async () => {
      const resp = await axios.get('https://restcountries.com/v2/all?fields=name,capital,flags,population,region')
      const data = await resp.data
      return data as ICountries[]
   }
)

interface ICountriesState {
   country: ICountries[];
   loading: string;
}

const initialState: ICountriesState = {
   country: [],
   loading: 'idle',
}

export const countrySlice = createSlice({
   name: '@@country',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(setCountyAction.pending, (state) => {
            state.loading = 'loading'
         })
         .addCase(setCountyAction.fulfilled, (state, action) => {
            state.country = action.payload;
            state.loading = 'idle'
         })
   }
})

