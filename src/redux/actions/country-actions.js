import axios from "axios"

export const getCountry = (country) => {
   return {
      type: "SET_COUNTRY",
      payload: country
   }
}

export const loaderOn = () => {
   return {
      type: "LOADER_ON"
   };
};


export const loaderOff = () => {
   return {
      type: "LOADER_OFF"
   };
};

export const setCountyAction = () => async (dispatch) => {
   dispatch(loaderOn());
   try {
      const resp = await axios.get('https://restcountries.com/v2/all?fields=name,capital,flags,population,region')
      dispatch(getCountry(resp.data))
   } catch (err) {
      console.log("Ошибка", err);
   }
   dispatch(loaderOff())
}