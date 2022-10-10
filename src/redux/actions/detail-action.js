import axios from "axios"

export const setDetail = (country) => {
   return {
      type: 'SET_DETAIL',
      payload: country,
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

export const clearDetails = () => {
   return {
      type: 'CLEAR_DETAIL'
   }
}

export const setNeighbour = (neighbour) => {
   return {
      type: 'SET_NEIGHBOUR',
      payload: neighbour
   }
}

export const setDetailAction = (name) => async (dispatch) => {
   dispatch(loaderOn());
   try {
      const resp = await axios.get(`https://restcountries.com/v2/name/${name}`)
      dispatch(setDetail(resp.data))
   } catch (err) {
      console.log("Ошибка", err)
   }
   dispatch(loaderOff())
}

export const setNeighbours = (codes) => async (dispatch) => {
   try {
      const resp = await axios.get(`https://restcountries.com/v2/alpha?codes=${codes.join(',')}`)
      dispatch(setNeighbour(resp.data))
   } catch (err) {
      console.log("Ошибка", err)
   }
}