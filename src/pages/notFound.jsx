import React from 'react';
import styles from './notFound.module.css';
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
   const navigate = useNavigate();

   return (
      <div className={styles.container}>
         <button onClick={() => navigate('/')} type='button' className={styles.button}>Назад</button>
         <div className={styles.image}>
            <img className={styles.img} src="https://www.2dsl.ru/wp-content/uploads/kak-ispravit-oshibku-404not-found-469152c.jpg" alt="notfound" />
         </div>
      </div>
   )
}
