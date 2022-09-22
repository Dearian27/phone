import styles from './ExampleCard.module.scss'

const ExampleCard = ({imgUrl}) => {

  return(
    <img src={imgUrl} alt="example" className={styles.card} />
  )
}

export default ExampleCard