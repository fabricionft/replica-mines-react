import styles from './Saldo.module.css';


export default function Saldo({jogo, paralelo}){

  return(
    <div className={styles.saldo+" "+styles[(paralelo) && "paralelo"]}>
        {
          (jogo.estadojogo == "finalizou" && !jogo.indiceGameOver) && (
            <p className={styles.lucro}>
              +{(jogo.valorCashOut - jogo.valorBet).toFixed(2)} BRL
            </p>
          )
        }
        <p className={styles.saldoMines}>{jogo.saldo.toFixed(2)}</p>
        <p className={styles.moedaMines}>BRL</p>
      </div>
  );
}