import React, { FC } from 'react';
import styles from './card.module.css'

interface ICard {
   png: string;
   name: string;
   population: number;
   region: string;
   capital: string
}

export const Card: FC<ICard> = ({ png, name, population, region, capital }) => {
   return (
      <div className={styles.container}>
         <img className={styles.img} src={png} alt={name} />
         <div className={styles.info}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.population}>Population: {population}</p>
            <p className={styles.region}>Region: {region}</p>
            <p className={styles.capital}>Capital: {capital}</p>
         </div>
      </div>
   )
}
