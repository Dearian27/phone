import {useState} from 'react'
import styles from './Pixel.module.scss'

const Pixel = ({state}) => {

  const [status, setStatus] = useState(state);

  return(
    <div onClick={() => setStatus(!status)} className={`${styles.pixel} ${status === true ? 'active' : ''}`} />
  )
}

export default Pixel