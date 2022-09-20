import React from 'react'
import styles from './Card.module.scss'
import Pixel from '../Pixel'

const example = [
  0, 0, 1, 0,
  0, 1, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
]

const Card = () => {
  return(
    <div className={styles.card}>
      {
        example.map((el, index) => {
          return <Pixel key={index} state={el === '1' ? 'active' : ''} />
        })
      } 
    </div>
  )
}

export default Card