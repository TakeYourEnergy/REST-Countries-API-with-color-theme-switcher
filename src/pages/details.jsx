import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setDetailAction } from '../redux/actions/detail-action';
import styles from './details.module.css';
import { Detail } from '../components/detail/detail';
import { Spinner } from '../components/spinner/spinner';
import { useLocation } from 'react-router-dom';


export const Details = () => {
   const { name } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const loading = useSelector(state => state.detailReducer.loading);
   let location = useLocation();
   console.log(location)

   useEffect(() => {
      dispatch(setDetailAction(name))
   }, [name, dispatch])

   return (
      <div className={styles.container}>
         <button onClick={() => navigate(-1)} type='button' className={styles.button}>Назад</button>
         <Detail />
      </div>
   )
}
