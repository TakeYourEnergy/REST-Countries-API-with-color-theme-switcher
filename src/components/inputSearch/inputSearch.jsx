import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import styles from './inputSearch.module.css';
import { setInput } from '../../redux/actions/input-action';

export const InputSearch = () => {
   const dispatch = useDispatch()

   const handleChange = (e) => {
      dispatch(setInput(e.target.value))
   }

   return (
      <div className={styles.inputSearch}>
         <IoSearch size='1.2rem' />
         <input type='search' onChange={handleChange} placeholder='Найти страну...' className={styles.input} />
      </div>
   )
}
