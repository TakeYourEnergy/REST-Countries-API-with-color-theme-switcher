const initialState = {
   country: [],
   loading: false
}

export const detailReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_DETAIL':
         return {
            ...state,
            country: action.payload
         }
      default:
         return state
   }
}