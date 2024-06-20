import styles from './CarregarArquivos.module.css';

//Assets
import btnBet from '../../assets/images/btnBet.png';
import imageCard from '../../assets/images/card.png';
import imageCardEscuro from '../../assets/images/cardEscuro.png';
import imageCardEstrelaAmarela from '../../assets/images/cardEstrelaAmarela.png';
import imageCardEstrela from '../../assets/images/cardEstrela.png';
import imageCardBombaExplodida from '../../assets/images/cardBombaExplodida.png';
import imageCardBomba from '../../assets/images/cardBomba.png';
import soundButton from '../../assets/sounds/button.mp3';
import soundAcerto from '../../assets/sounds/acerto.mp3';
import soundCash from '../../assets/sounds/cashout.mp3';
import soundinicio from '../../assets/sounds/play.mp3';
import soundFim from '../../assets/sounds/erro.mp3';


export default function CarregarArquivos(){

  return(
    <div className={styles.carregarImagens}>
        <img src={btnBet} alt="" />
        <img src={imageCard} alt="" />
        <img src={imageCardEscuro} alt="" />
        <img src={imageCardEstrela} alt="" />
        <img src={imageCardEstrelaAmarela} alt="" />
        <img src={imageCardBomba} alt="" />
        <img src={imageCardBombaExplodida} alt="" />
        <audio src={soundAcerto}></audio>
        <audio src={soundCash}></audio>
        <audio src={soundinicio}></audio>
        <audio src={soundFim}></audio>
        <audio src={soundButton}></audio>
      </div>
  );
}