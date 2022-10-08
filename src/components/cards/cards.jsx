import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../card/card';
import styles from './cards.module.css'


export const Cards = () => {
   const search = useSelector(state => state.inputReducer.search)
   const region = useSelector(state => state.selectReducer.region)

   const countries = useSelector(state => state.countryReducer.country.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.region.toLowerCase().includes(region.toLowerCase())
   ))

   return (
      <div className={styles.container}>
         {countries.map(country => {
            return (
               <Card
                  key={country.name}
                  png={country.flags.png}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
               />
            )
         })}
      </div>
   )
}
