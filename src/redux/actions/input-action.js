export const setInput = (value) => {
   return {
      type: 'SET_INPUT',
      payload: value
   }
}

export const clearInput = () => {
   return {
      type: 'CLEAR_INPUT'
   }
}