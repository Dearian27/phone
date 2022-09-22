import {useState, useEffect} from 'react'
import Card from '../Card'
import styles from './Main.module.scss'
import {useContext} from 'react'
import { PixelsContext } from '../../../pages/PixelInput'
import { Link } from 'react-router-dom'

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
        case example1: answers[index] = 1; setNumber(answers.join('')); break
        case example2: answers[index] = 2; setNumber(answers.join('')); break
        case example3: answers[index] = 3; setNumber(answers.join('')); break
        case example4: answers[index] = 4; setNumber(answers.join('')); break
        case example5: answers[index] = 5; setNumber(answers.join('')); break
        case example6: answers[index] = 6; setNumber(answers.join('')); break
        case example7: answers[index] = 7; setNumber(answers.join('')); break
        case example8: answers[index] = 8; setNumber(answers.join('')); break
        case example9: answers[index] = 9; setNumber(answers.join('')); break
        case example0: answers[index] = 0; setNumber(answers.join('')); break
        default: answers[index] = ''; setNumber(answers.join('')); break
      }
    })
  }, [activePixels, change]);
  

  const [copy, setCopy] = useState(false);
  const [modal, setModal] = useState(false);

  const onClickCopy = () => {
    setCopy(true)
    navigator.clipboard.writeText(number)
    // number.success("Copied success");
    setTimeout(() => {
      setCopy(false)
      setModal(true)
      setTimeout(() => {
        setModal(false)
      }, 1000)
    }, 2000)
  }


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
      <div className={styles.wrapper}>
        <div>Your phone number</div>
        <div className={styles.outputWrapper}>
          <input readOnly className={styles.output} value={number} />
          <button onClick={() => onClickCopy()} className={copy ? styles['active'] : ''}><img className={styles.copy} src='assets/copy.svg' alt='copy' /></button>
        </div>
        <Link to='/counterInput' className={styles.link}>Try another way</Link>
      </div>
        <div className={`${styles.dialogModal} ${copy ? styles['active'] : modal ? styles['dissappear'] : ''}`}>
            Text copied!
        </div>
    </main>
  )
}

export default Main