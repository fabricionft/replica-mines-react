import styles from './BotaoMines.module.css';

//Assets
import btnBet from '../../assets/images/btnBet.png';


export default function BotaoMines({jogo, iniciarPartida, darCashOut}){

  return(
    <button
      type='button'
      onClick={() => {
          (jogo.estadojogo == "pendente") ? iniciarPartida() : 
          (jogo.estadojogo == "iniciou") && darCashOut()
        }
      }
      className={
        styles.botaoJogo
        +" "+styles[(["iniciou", "finalizou"].includes(jogo.estadojogo)) && "cashOut"]
        +" "+styles[((jogo.acertos.length == 0 && jogo.estadojogo == "iniciou") || jogo.estadojogo == "finalizou") && "desativado"]
      }
      disabled={((jogo.acertos.length == 0 && jogo.estadojogo == "iniciou") || (jogo.estadojogo == "finalizou") || (jogo.valorBet > jogo.saldo && jogo.estadojogo == "pendente"))}
    >
      {
        jogo.estadojogo == "pendente" ? (
          <img
            src={btnBet}
          />
        ) : (
          <>
            <p>CASH OUT</p>
            <p>{jogo.valorCashOut.toFixed(2)} BRL</p>
          </>
        )
      }
    </button>
  );
}