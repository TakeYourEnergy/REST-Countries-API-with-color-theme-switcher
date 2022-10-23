import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './header.module.css';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { clearInput } from '../../redux/slices/inputSlices';
import { clearSelect } from '../../redux/slices/selectSlices'; 
import { toggleTheme } from '../../redux/slices/themeSlices';

export const Header = () => {
   const dispatch = useDispatch()
   const state = useSelector(state => state.themeReducer)

   useEffect(() => {
      document.body.setAttribute('data-theme', state)
   }, [state])

   const handleClick = () => {
      if (state === 'dark') dispatch(toggleTheme('light'))
      else dispatch(toggleTheme('dark'))
   }

   const clickLogo = () => {
      dispatch(clearInput())
      dispatch(clearSelect())
   }

   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <Link onClick={() => clickLogo()} className={styles.link} to='/'>Where in the world?</Link>
            <div onClick={handleClick} className={styles.button}>
               {state === 'dark' ?
                  (<IoMoonOutline size='1.5rem' />) :
                  (<IoMoon size='1.5rem' />)
               }
               <p>{state === 'dark' ? 'Dark theme' : 'Light theme'}</p>
            </div>
         </div>
      </header>
   )
}
