import React from 'react';
import styles from './card.module.css'

export const Card = ({ png, name, population, region, capital }) => {
   return (
      <div className={styles.container}>
         <img src={png} alt={name} />
         <div className={styles.info}>
            <h2 className={styles.title}></h2>
            <p className={styles.population}>Population: {population}</p>
            <p className={styles.region}>Region: {region}</p>
            <p className={styles.capital}>Capital: {capital}</p>
         </div>
      </div>
   )
}
