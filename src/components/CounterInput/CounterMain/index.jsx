import React from 'react'
import { Link } from 'react-router-dom'
import CounterNumber from '../CounterNumber/CounterNumber'
import styles from './CounterMain.module.scss'

export const CounterMain = () => {
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        Is it your phone number?
      </div>
      <div className={styles.numbersWrapper}>
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
        <CounterNumber />
      </div>
      <Link to='/counterInput' className={styles.link}>Try another way</Link>
    </div>
  )
}

export default CounterMain