import axios from "axios"

export const setDetail = (country) => {
   return {
      type: 'SET_DETAIL',
      payload: country
   }
}


export const setDetailAction = (name) => async (dispatch) => {
   try {
      const resp = await axios.get(`https://restcountries.com/v2/name/${name}`)
      dispatch(setDetail(resp.data))
   } catch (err) {
      console.log("Ошибка", err)
   }
}