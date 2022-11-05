import React from 'react'
import { InputSearch } from '../inputSearch/inputSearch'
import styles from './form.module.css';
import Select, { Props, ActionMeta } from 'react-select';
import { selectAction } from '../../redux/slices/selectSlices';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks/redux-hooks';

export interface ICountryOption {
   value: string;
   label: string;
}

const MySelect = (props: Props<ICountryOption, false>) => {
   return (
      <Select {...props} />
   )
}


export const Form = () => {
   const dispatch = useAppDispatch()
   const region = useAppSelector(state => state.selectReducer.region)

   const handleChange = (region: any) => {
      //console.log(region?.value || '')

      //region - { value: 'Africa', label: 'Africa' }
      dispatch(selectAction(region?.value || ''))
   }

   const customStyles = {
      //опции - те значения, которые видные после раскрытия селекта
      option: (provided: any, state: any) => ({
         ...provided,
         backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
         color: 'var(--colors-text)',
         cursor: 'pointer',
         margin: '0px',
      }),
      //контроль - начальный селект, который мы видим
      control: (provided: any) => ({
         ...provided,
         backgroundColor: 'var(--colors-ui-base)',
         color: 'var(--colors-text)',
         borderRadius: '10px',
         boxShadow: 'var(--shadow)',
         border: 'none',
         padding: '0.25rem',
         height: '50px',
         cursor: 'pointer',
         width: '230px',
         marginLeft: '10px',
      })
   }

   const options: ICountryOption[] = [
      { value: 'Africa', label: 'Africa' },
      { value: 'America', label: 'America' },
      { value: 'Asia', label: 'Asia' },
      { value: 'Europe', label: 'Europe' },
      { value: 'Oceania', label: 'Oceania' }
   ]

   return (
      <div className={styles.form}>
         <InputSearch />
         <Select
            classNamePrefix='custom-select'
            isSearchable={false}
            isClearable
            placeholder='Filter by region'
            options={options}
            styles={customStyles}
            onChange={handleChange}
         // value={region}
         />
      </div>
   )
}

//classNamePrefix='custom-select' для стилизации. Все стили в index.css

