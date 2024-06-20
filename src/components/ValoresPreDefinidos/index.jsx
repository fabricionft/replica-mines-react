import styles from './ValoresPreDefinidos.module.css';


export default function ValoresPreDefinidos({visibilidadeValoresPredefinidos, jogo, setValorBet}){

  return(
    <>
      {
        visibilidadeValoresPredefinidos && (
          <div className={styles.valoresPredefinidos}>
            <div className={styles.margemValoresPredefinidos}>
              <p>Bet BRL</p>
              {
                jogo.intervaloDeValores.map((valor) => (
                  <button
                    key={valor}
                    className={styles.btnValoresPredefinidos+" "+styles[(valor == jogo.valorBet) && "selecionado"]}
                    onClick={() => setValorBet(valor)}
                  >
                    {valor.toFixed(2)}
                  </button>
                ))
              }                 
            </div>
          </div>
        )
      }
    </>
  )
}