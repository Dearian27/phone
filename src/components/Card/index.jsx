import {useContext} from 'react'
import styles from './Card.module.scss'
import Pixel from '../Pixel'
import { PixelsContext } from '../../App'

const example = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
]

const example1 = [
  0, 0, 1, 0,
  0, 1, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
]


const Card = ({id, setChange, change}) => {

  const {activePixels} = useContext(PixelsContext);

  return(
    <div className={styles.card}>
      {
        example.map((el, index) => {
          return <Pixel setChange={setChange} change={change} key={index} id={index} parentId={id} state={el === 1 ? true : false} />
        })
      }
    </div>
  )
}

export default Card