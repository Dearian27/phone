import React from 'react'
import Card from '../Card'
import styles from './Main.module.scss'

const Main = () => {
  return(
    <main className={styles.main}>
      <div className={styles.title}>
        Enter your phone number
      </div>
      <div className={styles.sandbox}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.outputWrapper}>
         <div>Your phone number</div>
         <input className={styles.output} />
      </div>

    </main>
  )
}

export default Main