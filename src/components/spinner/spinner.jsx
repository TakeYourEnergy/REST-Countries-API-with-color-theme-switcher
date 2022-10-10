import React from 'react';
import RingLoader from "react-spinners/BeatLoader";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Spinner = () => {

   return (
      <RingLoader color="#327a84" loading={true} />
   )
}
