import { createContext } from 'react';
import './App.css';
import Info from './components/Info';
import Main from './components/Main';

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

export const PixelsContext = createContext(activePixels)

function App() {

  

  return (
    <section className="wrapper">
      <PixelsContext.Provider value={activePixels}>
        <Main />
        <Info />
      </PixelsContext.Provider>
    </section>
  );
}

export default App;
