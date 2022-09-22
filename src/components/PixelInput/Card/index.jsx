import {useContext} from 'react'
import styles from './Card.module.scss'
import Pixel from '../Pixel'
import { PixelsContext } from '../../../pages/PixelInput'

const frame = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
]

const Card = ({id, setChange, change}) => {

  const {activePixels} = useContext(PixelsContext);

  return(
    <div className={styles.card}>
      {
        frame.map((el, index) => {
          return <Pixel setChange={setChange} change={change} key={index} id={index} parentId={id} state={el === 1 ? true : false} />
        })
      }
    </div>
  )
}

export default Card