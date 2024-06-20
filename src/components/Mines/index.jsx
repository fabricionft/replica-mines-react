import styles from './Mines.module.css';

//Assets
import imageCard from '../../assets/images/card.png';
import imageCardEscuro from '../../assets/images/cardEscuro.png';
import imageCardEstrelaAmarela from '../../assets/images/cardEstrelaAmarela.png';
import imageCardEstrela from '../../assets/images/cardEstrela.png';
import imageCardBombaExplodida from '../../assets/images/cardBombaExplodida.png';
import imageCardBomba from '../../assets/images/cardBomba.png';


export default function Mines({jogo, clicarNoCard}){


  return(
    <div className={styles.jogo}>
      {
        jogo.numeros.map((numero) => (
          <div 
            className={styles.cardGiratorio}
            key={numero}  
          >
            <div className={styles.cardGiratorioConteudo+" "+styles[((jogo.girar) && !jogo.acertos.includes(numero) && numero != jogo.indiceGameOver) && "girar"]}>
              <div className={styles.cardGiratorioConteudoFrente}>
                <img
                  onClick={() => {
                      (jogo.estadojogo == "iniciou") && clicarNoCard(numero)
                    }
                  }
                  src={
                    (jogo.estadojogo == "pendente") ? imageCard :
                    (jogo.indiceGameOver == numero) ? imageCardBombaExplodida :
                    (jogo.acertos.includes(numero)) ? imageCardEstrelaAmarela : 
                    (jogo.estadojogo == "iniciou") ? imageCardEscuro :
                    imageCard
                  }
                  className={styles.card}
                ></img>
              </div>

              <div className={styles.cardGiratorioConteudoTraseira}>
                <img
                  key={numero}
                  src={
                    (jogo.estadojogo == "pendente") ? imageCard :
                    (jogo.estadojogo == "finalizou" && !jogo.indicesMinas.includes(numero) && !jogo.acertos.includes(numero)) ? imageCardEstrela :
                    (jogo.estadojogo == "finalizou" && jogo.indicesMinas.includes(numero)) ? imageCardBomba :
                    imageCard
                  }
                  className={styles.card}
                ></img>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}