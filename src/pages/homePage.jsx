import React from 'react';
import { Cards } from '../components/cards/cards';
import { Form } from '../components/form/form';
import { Spinner } from '../components/spinner/spinner';
import { useSelector } from 'react-redux';

export const HomePage = () => {
   // const state = useSelector(state => console.log(state))
   const load = useSelector(state => state.countryReducer.loading)

   return (
      <>
         <Form />
         <Cards />
         <div className={load ? 'spinner' : 'nullSpinner'}>
            <Spinner load={load} />
         </div>
      </>
   )
}
