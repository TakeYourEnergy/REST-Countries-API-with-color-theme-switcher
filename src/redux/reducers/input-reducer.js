const initialState = {
   search: '',
   region: ''
}

export const inputReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_INPUT':
         return {
            ...state,
            search: action.payload
         }
      default:
         return state
   }
}