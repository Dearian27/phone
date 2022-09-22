import { Route, Routes } from 'react-router-dom';
import './App.css';
import CounterInput from './pages/CounterInput';
import PixelInput from './pages/PixelInput';
import RandomInput from './pages/RandomInput';


function App() {


  

  return (
    <section className="wrapper">  
      <Routes>
        <Route path='/' element={<PixelInput/>}/>
        <Route path='/counterInput' element={<CounterInput/>}/>
        <Route path='/randomInput' element={<RandomInput/>} />
      </Routes>
    </section>
  );
}

export default App;
