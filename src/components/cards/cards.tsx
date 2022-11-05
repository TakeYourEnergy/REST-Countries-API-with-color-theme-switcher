import React from 'react'
import { Card } from '../card/card';
import styles from './cards.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux-hooks/redux-hooks';


export const Cards = () => {
   const search = useAppSelector(state => state.inputReducer.search)
   const region = useAppSelector(state => state.selectReducer.region)

   const countries = useAppSelector(state => state.countryReducer.country.filter(item =>
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
