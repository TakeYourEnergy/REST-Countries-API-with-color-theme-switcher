import React from 'react';
import { Cards } from '../components/cards/cards';
import { Form } from '../components/form/form';
import { Spinner } from '../components/spinner/spinner';
import { useAppSelector } from '../redux/redux-hooks/redux-hooks';

export const HomePage = () => {
   const load = useAppSelector(state => state.countryReducer.loading)

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
