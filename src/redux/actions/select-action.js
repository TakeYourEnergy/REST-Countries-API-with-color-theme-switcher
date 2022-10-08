export const selectAction = (region) => {
   return {
      type: 'SET_REGION',
      payload: region
   }
}

export const clearSelect = () => {
   return {
      type: 'CLEAR_SELECT'
   }
}