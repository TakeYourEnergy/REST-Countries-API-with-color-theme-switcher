const initialState = {
   country: [],
   loading: false,
   neighbours: []
}

export const detailReducer = (state = initialState, action) => {
   switch (action.type) {
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
      case 'SET_DETAIL':
         return {
            ...state,
            country: action.payload
         }
      case 'SET_NEIGHBOUR':
         return {
            ...state,
            neighbours: action.payload
         }
      case 'CLEAR_DETAIL':
         return initialState
      default:
         return state
   }
}