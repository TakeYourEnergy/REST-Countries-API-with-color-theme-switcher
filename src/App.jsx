import React, { useEffect } from 'react';
import { Header } from './components/header/header'
import { Routes, Route } from 'react-router-dom';
import { Form } from './components/form/form'
import { useDispatch, useSelector } from 'react-redux';
import { setCountyAction } from './redux/actions/country-actions';
import { Spinner } from './components/spinner/spinner'
import { Cards } from './components/cards/cards';


function App() {
  const dispatch = useDispatch()
  const load = useSelector(state => state.countryReducer.loading)
  
  useEffect(() => {
    dispatch(setCountyAction())
  }, [dispatch])


  return (
    <div>
      <Header />
      <Form />
      <Cards />
      <div className={load ? 'spinner' : 'nullSpinner'}>
        <Spinner />
      </div>
    </div>
  );
}

export default App;
