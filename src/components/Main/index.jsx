import {useState, useEffect} from 'react'
import Card from '../Card'
import styles from './Main.module.scss'
import {useContext} from 'react'
import { PixelsContext } from '../../App'




const Main = ({change, setChange}) => {
  
  const els = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const answers = ['','','','','','','','','','']
  const {activePixels} = useContext(PixelsContext)

  const [number, setNumber] = useState(answers.join(''))
  
  const example1 = "2561014182226"
  const example2 = "12471114172024252627"
  const example3 = "12471113141920232526"
  const example4 = "034781112131415192327"
  const example5 = "0123481213141920232526"
  const example6 = "12478121314161920232526"
  const example7 = "012371114182125"
  const example8 = "12478111314161920232526"
  const example9 = "12478111314151920232526"
  const example0 = "12478111215161920232526"
  


  useEffect(() => {
    els.forEach((e, index) => {
      switch(activePixels[index].map(el => String(el)).join('')) {
        case example1: setNumber(answers.map(answers[index] = 1));
        break;
        case example2: setNumber(answers[index] = 2);
        break
        case example3: setNumber(answers[index] = 3);
        break
        case example4: answers[index] = 4;
        break
        case example5: answers[index] = 5;
        break
        case example6: answers[index] = 6;
        break
        case example7: answers[index] = 7;
        break
        case example8: answers[index] = 8;
        break;
        case example9: answers[index] = 9;
        break
        case example0: answers[index] = 0;
        break
        default: ;
        break;
      }
    })
    console.log(answers)
  }, [activePixels, change]);
  
 

  return(
    <main className={styles.main}>
      <div className={styles.title}>
        Enter your phone number
      </div>
      <div className={styles.sandbox}>
        {
          els.map((el, i) => <Card change={change} setChange={setChange} key={i} id={el}/>)
        } 
      </div>
      <div className={styles.outputWrapper}>
         <div>Your phone number</div>
         <input readOnly className={styles.output} value={number} />
      </div>

    </main>
  )
}

export default Main