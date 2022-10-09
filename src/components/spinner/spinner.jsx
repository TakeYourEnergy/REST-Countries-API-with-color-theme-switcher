import React from 'react';
import RingLoader from "react-spinners/BeatLoader";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Spinner = () => {
   const load = useSelector(state => state.countryReducer.loading)
   const loading = useSelector(state => state.detailReducer.loading);

   let location = useLocation();
   console.log(location)
   return (
      <RingLoader color="#327a84" loading={load} />
   )
}
