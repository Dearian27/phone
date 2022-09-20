import {useContext, useEffect,  useState} from 'react'
import { PixelsContext } from '../../App'
import styles from './Pixel.module.scss'

const Pixel = ({state, id, parentId}) => {

  const activePixels = useContext(PixelsContext)
  const [status, setStatus] = useState(state)

  useEffect(() => {
    if(status) {
      activePixels[parentId].push(id)
      activePixels[parentId].sort()
    }
    else if(!status) {
      activePixels[parentId] = activePixels[parentId].filter(el => el !== id )
      // console.log(activePixels[parentId])
    }
  }, [status]);

  return(
    <div onClick={() => setStatus(!status)} className={`${styles.pixel} ${status === true ? 'active' : ''}`} />
  )
}

export default Pixel