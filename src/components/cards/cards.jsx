import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../card/card';
import styles from './cards.module.css'


export const Cards = () => {
   const countries = useSelector(state => state.countryReducer.country)

   return (
      <div className={styles.container}>
         {countries.map(country => {
            return (
               <Card key={country.name} png={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital}/>
            )
         })}
      </div>
   )
}
