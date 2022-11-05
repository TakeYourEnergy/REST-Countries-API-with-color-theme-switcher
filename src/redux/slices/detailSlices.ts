import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IDetailCountry {
   alpha2Code: string;
   alpha3Code: string;
   altSpellings: Array<string>;
   area: number;
   callingCodes: string[];
   capital: string;
   currencies: Array<{ code: string, name: string, symbol: string }>
   demonym: string;
   flag: string;
   flags: { svg: string, png: string };
   independent: boolean;
   languages: Array<{ iso639_1: string, iso639_2: string, name: string, nativeName: string }>
   latlng: number[];
   name: string;
   nativeName: string;
   numericCode: string;
   population: number;
   region: string;
   regionalBlocs: Array<{ [key: string]: string }>;
   subregion: string;
   timezones: Array<string>;
   topLevelDomain: string[];
   translations: Array<{ [key: string]: string }>;
   borders: string[]
}


export const setDetailAction = createAsyncThunk(
   '@@detail/country',
   async (name: string) => {
      const resp = await axios.get(`https://restcountries.com/v2/name/${name}`)
      const data = resp.data
      return data as IDetailCountry[]
   }
)

export const setNeighbours = createAsyncThunk(
   '@@detail/neighbours',
   async (codes: string[]) => {
      const resp = await axios.get(`https://restcountries.com/v2/alpha?codes=${codes.join(',')}`)
      const data = resp.data
      return data as IDetailCountry[]
   }
)

interface IStateDeatail {
   loading: string;
   country: IDetailCountry[];
   neighbours: IDetailCountry[],
}

const initialState: IStateDeatail = {
   country: [],
   neighbours: [],
   loading: 'idle'
}


export const detailSlice = createSlice({
   name: '@@detail',
   initialState,
   reducers: {
      clearDetails: (state) => {
         state.country = [];
         state.neighbours = [];
         state.loading = 'idle'
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(setDetailAction.pending, (state) => {
            state.loading = 'loading';
         })
         .addCase(setDetailAction.fulfilled, (state, action) => {
            state.country = action.payload;
            state.loading = 'idle';
         })
         .addCase(setNeighbours.pending, (state) => {
            state.loading = 'loading';
         })
         .addCase(setNeighbours.fulfilled, (state, action) => {
            state.neighbours = action.payload;
            state.loading = 'idle';
         })
   }
})

export const { clearDetails } = detailSlice.actions