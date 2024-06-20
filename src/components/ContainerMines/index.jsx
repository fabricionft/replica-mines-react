import styles from './ContainerMines.module.css';


export default function ContainerMines({children}){

  return(
    <div className={styles.containerMines}>
      {children}
    </div>
  )
}