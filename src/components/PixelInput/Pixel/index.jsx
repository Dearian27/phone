import {useContext, useEffect,  useState} from 'react'
import { PixelsContext } from '../../../pages/PixelInput'
import styles from './Pixel.module.scss'

const Pixel = ({state, id, parentId, setChange, change}) => {

  const {activePixels} = useContext(PixelsContext)
  const [status, setStatus] = useState(state)

  useEffect(() => {
    // console.log('x')
    if(status) {
      activePixels[parentId].push(id)
      activePixels[parentId].sort((a, b) => a - b)
      setChange(!change)
    }
    else if(!status) {
      activePixels[parentId] = activePixels[parentId].filter(el => el !== id )
      activePixels[parentId].sort((a, b) => a - b)
      setChange(!change)
      // console.log(activePixels[parentId])
    }
  }, [status]);

  return(
    <div onClick={() => setStatus(!status)} className={`${styles.pixel} ${status === true ? 'active' : ''}`} />
  )
}

export default Pixel