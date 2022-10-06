
export const themeReducer = (state = 'dark', action) => {
   switch (action.type) {
      case "SWITCH_THEME":
         return action.payload
      default:
         return state
   }
}