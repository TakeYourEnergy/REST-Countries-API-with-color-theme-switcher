import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../card/card';
import styles from './cards.module.css';
import { Link } from 'react-router-dom';


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
               <Link className={styles.link} key={country.name} to={`/country/${country.name}`}>
                  <Card
                     png={country.flags.png}
                     name={country.name}
                     population={country.population}
                     region={country.region}
                     capital={country.capital}
                  />
               </Link>
            )
         })}
      </div>
   )
}
