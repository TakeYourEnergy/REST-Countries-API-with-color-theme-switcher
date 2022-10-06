import React from 'react';
import RingLoader from "react-spinners/BeatLoader";
import { useSelector } from 'react-redux';

export const Spinner = () => {
   const load = useSelector(state => state.countryReducer.loading)
   return (
      <RingLoader color="#327a84" loading={load} />
   )
}
