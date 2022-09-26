import React from 'react'
import ExampleCard from '../exampleCard'
import styles from './Info.module.scss'


const examples = [
  'assets/zero.svg',
  'assets/one.svg',
  'assets/two.svg',
  'assets/three.svg',
  'assets/four.svg',
  'assets/five.svg',
  'assets/six.svg',
  'assets/seven.svg',
  'assets/eight.svg',
  'assets/nine.svg',
]

const Info = () => {
  return(
    <aside className={styles.info}>
        {examples.map((url, index) => {
          return <ExampleCard key={index} imgUrl={url} />
        })}
    </aside>
  )
}

export default Info