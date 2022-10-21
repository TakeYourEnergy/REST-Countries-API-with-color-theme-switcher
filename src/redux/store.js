import { rootReducer } from './reducers/rootReducer';
import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from './slices/themeSlices';

export const store = configureStore({
   reducer: {
      // rootReducer: rootReducer,
      themeReducer: themeSlice.reducer
   },
   devTools: true
})