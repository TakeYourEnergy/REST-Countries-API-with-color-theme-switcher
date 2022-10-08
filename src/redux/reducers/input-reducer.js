const initialState = {
   search: '',
}

export const inputReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_INPUT':
         return {
            ...state,
            search: action.payload
         }
      case 'CLEAR_INPUT':
         return {
            ...state,
            search: ''
         }
      default:
         return state
   }
}