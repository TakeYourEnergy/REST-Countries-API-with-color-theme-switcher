import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks/redux-hooks';
import { setNeighbours } from '../../redux/slices/detailSlices';
import styles from './detail.module.css'

export const Detail = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch()
   const country = useAppSelector(state => state.detailReducer.country);
   const neig = useAppSelector(state => state.detailReducer.neighbours)

   useEffect(() => {
      if (country[0]?.borders?.length > 0) {
         dispatch(setNeighbours(country[0]?.borders))
      }
   }, [country, dispatch])

   return (
      <div className={styles.container}>
         <img className={styles.image} src={country[0]?.flag} alt="flag" />
         <h2 className={styles.country}>Country: {country[0]?.name}</h2>
         <p className={styles.capital}><b>Capital:</b> {country[0]?.capital}</p>
         <p className={styles.population}><b>Population:</b> {country[0]?.population}</p>
         <p className={styles.region}><b>Region:</b> {country[0]?.region}</p>
         <div className={styles.neighbours}>
            <b>Neighbours:</b>
            <div className={styles.buttons}>
               {neig?.map(item => {
                  return (
                     <button
                        onClick={() => navigate(`/country/${item.name}`)}
                        className={styles.neighbour}
                        key={item.name}>{item.name}
                     </button>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
