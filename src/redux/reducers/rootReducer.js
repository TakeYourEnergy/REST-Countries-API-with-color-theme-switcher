import { combineReducers } from 'redux';
import { themeReducer } from './theme-reducer';
import { countryReducer } from './country-reducer';
import { inputReducer } from './input-reducer';
import { selectReducer } from './select-reducer';
import { detailReducer } from './detail-reducer';

export const rootReducer = combineReducers({
   // themeReducer,
   countryReducer,
   inputReducer,
   selectReducer,
   detailReducer
})