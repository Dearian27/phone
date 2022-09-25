import {React, useState, createContext} from 'react'
import Info from '../components/PixelInput/Info';
import Main from '../components/PixelInput/Main';
import '../styles/PixelInput.scss'

const activePixels = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: []
}

export const PixelsContext = createContext({
  activePixels,
})


const PixelInput = () => {

  const [change, setChange] = useState(false);

  return(
    <section className='pixelInput__wrapper'>
      <PixelsContext.Provider value={{ activePixels }}>
        <Main change={ change } setChange={ setChange }/>
        <Info />
      </PixelsContext.Provider>  
    </section>
  )
}

export default PixelInput