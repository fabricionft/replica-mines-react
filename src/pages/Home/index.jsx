import styles from './Home.module.css';

//Components
import Saldo from '../../components/Saldo';
import SeletorQuantidadeDeMinas from '../../components/SeletorQuantidadeDeMinas';
import ContainerMines from '../../components/ContainerMines';
import Mines from '../../components/Mines';
import Bet from '../../components/Bet';
import BotaoMines from '../../components/BotaoMines';

//Hooks
import useMines from '../../hooks/useMines';


export default function Home(){
  const {
    jogo, visibilidadeValoresPredefinidos, 
    setVisibilidadeValoresPredefinidos, setValorBet, alterarValor, 
    escolherQuantidadeDeMinas, iniciarPartida, clicarNoCard, darCashOut
  } = useMines();

  return(
    <div className={styles.containerPrincipal}>
      <Saldo
        jogo={jogo}
      />

      <ContainerMines>
        <header className={styles.seletores}>
          <SeletorQuantidadeDeMinas
            jogo={jogo}
            escolherQuantidadeDeMinas={escolherQuantidadeDeMinas}
          />

          <div className={styles.valores}>
            Next: {jogo.multiplicador.toFixed(2)}x
          </div>

          <hr />
        </header>

        <Mines
          jogo={jogo}
          clicarNoCard={clicarNoCard}
        />

        <div></div>
      </ContainerMines>

      <footer className={styles.botoes}>
        <Saldo
          jogo={jogo}
          paralelo={true}
        />

        <Bet
          jogo={jogo}
          alterarValor={alterarValor}
          visibilidadeValoresPredefinidos={visibilidadeValoresPredefinidos}
          setVisibilidadeValoresPredefinidos={setVisibilidadeValoresPredefinidos}
          setValorBet={setValorBet}
        />
        
        <BotaoMines
          jogo={jogo}
          iniciarPartida={iniciarPartida}
          darCashOut={darCashOut}
        />
      </footer>
    </div>
  )
};