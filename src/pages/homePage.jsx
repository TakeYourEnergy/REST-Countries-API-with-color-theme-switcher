import React from 'react';
import { Cards } from '../components/cards/cards';
import { Form } from '../components/form/form';
import { Spinner } from '../components/spinner/spinner';
import { useSelector } from 'react-redux';

export const HomePage = () => {
   const load = useSelector(state => state.countryReducer.loading)

   return (
      <>
         <Form />
         <Cards />
         <div className={load === 'loading' ? 'spinner' : 'nullSpinner'}>
            <Spinner />
         </div>
      </>
   )
}
