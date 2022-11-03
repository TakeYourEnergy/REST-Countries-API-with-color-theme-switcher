import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from './slices/themeSlices';
import { inputSlice } from './slices/inputSlices';
import { selectSlice } from "./slices/selectSlices";
import { countrySlice } from "./slices/countrySlices";
import { detailSlice } from "./slices/detailSlices";

export const store = configureStore({
   reducer: {
      themeReducer: themeSlice.reducer,
      inputReducer: inputSlice.reducer,
      selectReducer: selectSlice.reducer,
      countryReducer: countrySlice.reducer,
      detailReducer: detailSlice.reducer
   },
   devTools: true
})

export type RootState = ReturnType<typeof store.getState>; // для селектора
export type AppDispatch = typeof store.dispatch; // для диспатча
