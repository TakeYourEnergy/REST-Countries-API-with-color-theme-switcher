import React from 'react'
import { useSelector } from 'react-redux';
import styles from './detail.module.css'

export const Detail = () => {
   const country = useSelector(state => state.detailReducer.country);

   return (
      <div className={styles.container}>
         <img className={styles.image} src={country[0]?.flag} alt="flag" />
         <h2 className={styles.country}>Country: {country[0]?.name}</h2>
         <p className={styles.capital}><b>Capital:</b> {country[0]?.capital}</p>
         <p className={styles.population}><b>Population:</b> {country[0]?.population}</p>
         <p className={styles.region}><b>Region:</b> {country[0]?.region}</p>
      </div>
   )
}
