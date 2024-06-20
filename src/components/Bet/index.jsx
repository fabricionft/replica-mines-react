import styles from './Bet.module.css';

//Assets
import pontos from '../../assets/icons/3pontos.png';
import ValoresPreDefinidos from '../ValoresPreDefinidos';


export default function Bet({jogo, setValorBet, alterarValor, visibilidadeValoresPredefinidos, setVisibilidadeValoresPredefinidos}){

  return(
    <div className={styles.bet}>
      <ValoresPreDefinidos
        visibilidadeValoresPredefinidos={visibilidadeValoresPredefinidos}
        jogo={jogo}
        setValorBet={setValorBet}
      />

      <div className={styles.valorBet}>
        <p>Bet BRL</p>
        <input
          type='number'
          onChange={(e) => {
              if(e.target.value.length <= 5 && e.target.value >= 1.00) setValorBet(parseFloat(e.target.value))
            }
          }
          value={jogo.valorBet.toFixed(2) || 1.00}
          readOnly={(jogo.estadojogo == "iniciou")}
          min={1}
          max={100}
        ></input>
      </div>

      <div className={styles.botoesBet}>
        <button 
          className={styles.btnBet}
          onClick={() => alterarValor("diminuir")}
          disabled={(jogo.valorBet <= 1.00 || (jogo.estadojogo == "iniciou"))}
        >
          -
        </button>

        <button 
          className={styles.btnBet}
          onClick={() => setVisibilidadeValoresPredefinidos((visibilidadeValoresPredefinidos) ? false : true)}
          disabled={(jogo.estadojogo == "iniciou")}
        >
          <img
            src={pontos}
            width={"12.5px"} 
          />
        </button>

        <button 
          className={styles.btnBet}
          onClick={() => alterarValor("aumentar")}
          disabled={(jogo.valorBet >= 100 || (jogo.estadojogo == "iniciou"))}
        >
          +
        </button>
      </div>
    </div>
  )
}