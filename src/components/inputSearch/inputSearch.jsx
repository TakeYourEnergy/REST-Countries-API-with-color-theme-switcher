import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './inputSearch.module.css'

export const InputSearch = () => {
   const [text, setText] = useState('')

   return (
      <div className={styles.inputSearch}>
         <IoSearch size='1.2rem' />
         <input type='search' onChange={(e) => setText(e.target.value)} value={text} placeholder='Найти страну...' className={styles.input} />
      </div>
   )
}
