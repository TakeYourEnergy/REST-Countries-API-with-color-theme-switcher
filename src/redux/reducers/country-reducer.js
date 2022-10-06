const initialState = {
   country: [],
   loading: false
}

export const countryReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_COUNTRY':
         return {
            ...state,
            country: action.payload
         }
      case "LOADER_ON":
         return {
            ...state,
            loading: true
         }
      case "LOADER_OFF":
         return {
            ...state,
            loading: false
         }
      default:
         return state
   }
}