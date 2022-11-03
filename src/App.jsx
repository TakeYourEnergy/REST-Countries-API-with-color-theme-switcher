import React, { useEffect } from 'react';
import { Header } from './components/header/header'
import { Routes, Route } from 'react-router-dom';
import { setCountyAction } from './redux/slices/countrySlices';
import { HomePage } from './pages/homePage';
import { NotFound } from './pages/notFound';
import { Details } from './pages/details'
import { useAppDispatch } from './redux/redux-hooks/redux-hooks';


function App() {
  const dispatch = useAppDispatch()

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
