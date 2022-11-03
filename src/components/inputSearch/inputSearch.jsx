import React from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './inputSearch.module.css';
import { setInput } from '../../redux/slices/inputSlices';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks/redux-hooks';

export const InputSearch = () => {
   const dispatch = useAppDispatch()
   const inputValue = useAppSelector(state => state.inputReducer.search)

   const handleChange = (e) => {
      dispatch(setInput(e.target.value))
   }

   return (
      <div className={styles.inputSearch}>
         <IoSearch size='1.2rem' />
         <input
            type='search'
            onChange={handleChange}
            placeholder='Найти страну...'
            className={styles.input}
            value={inputValue}
         />
      </div>
   )
}
