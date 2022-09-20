import React from 'react'
import Card from '../Card'
import styles from './Main.module.scss'
import {useContext} from 'react'
import { PixelsContext } from '../../App'




const Main = () => {

  const activePixels = useContext(PixelsContext)
  // console.log(activePixels)

  const els = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return(
    <main className={styles.main}>
      <div className={styles.title}>
        Enter your phone number
      </div>
      <div className={styles.sandbox}>
      {
        els.map(el => <Card id={el}/>)
      }
        
        
      </div>
      <div className={styles.outputWrapper}>
         <div>Your phone number</div>
         <input className={styles.output} />
      </div>

    </main>
  )
}

export default Main