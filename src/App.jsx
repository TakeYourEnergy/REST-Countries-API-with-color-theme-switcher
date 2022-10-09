import React, { useEffect } from 'react';
import { Header } from './components/header/header'
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCountyAction } from './redux/actions/country-actions';
import { HomePage } from './pages/homePage';
import { NotFound } from './pages/notFound';
import { Details } from './pages/details'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountyAction())
  }, [dispatch])


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:name' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
