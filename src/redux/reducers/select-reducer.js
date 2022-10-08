const initialState = {
   region: ''
}

export const selectReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_REGION':
         return {
            ...state,
            region: action.payload
         }
      case 'CLEAR_SELECT':
         return {
            ...state,
            region: ''
         }
      default:
         return state
   }
}