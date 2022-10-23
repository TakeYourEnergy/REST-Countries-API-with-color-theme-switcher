import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { clearDetails, setDetailAction } from '../redux/slices/detailSlices';
import styles from './details.module.css';
import { Detail } from '../components/detail/detail';
import { Spinner } from '../components/spinner/spinner';

export const Details = () => {
   const { name } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const loading = useSelector(state => state.detailReducer.loading);

   useEffect(() => {
      dispatch(setDetailAction(name))

      return () => {
         dispatch(clearDetails())
      }
   }, [name, dispatch])

   return (
      <>
         <div className={styles.container}>
            <button onClick={() => navigate(-1)} type='button' className={styles.button}>Назад</button>
            <Detail />
         </div>
         <div className={loading === 'loading' ? 'spinner' : 'nullSpinner'}>
            <Spinner />
         </div>
      </>
   )
}
