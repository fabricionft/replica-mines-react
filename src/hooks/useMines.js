import { useState } from "react";

//Assets
import inicioSound from '../assets/sounds/play.mp3'
import acertoSound from '../assets/sounds/acerto.mp3'
import cashSound from '../assets/sounds/cashout.mp3'
import erroSound from '../assets/sounds/erro.mp3'


const useMines = () => {

  //Jogo
  const [jogo, setJogo] = useState({
    intervaloDeValores: [1, 2, 3, 4, 5, 6, 7, 8, 12, 20, 50, 100],
    valorBet: 1.00,
    numeros: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    estadojogo: "pendente",
    acertos: [],
    indiceGameOver: null,
    quantidadeDeMinas: 2,
    indicesMinas: [],
    saldo: 100.00,
    valorCashOut: 0.00,
    valorProximoCashOut: 0.00,
    multiplicador: 1.00,
    girar: false
  });

  const [visibilidadeValoresPredefinidos, setVisibilidadeValoresPredefinidos] = useState(false);

  const alterarValor = (acao) => {
    let proximoValor = 0;
    let intervaloDeValores = jogo.intervaloDeValores;
    let valorBet = jogo.valorBet;

    for(let i = 0; i <= intervaloDeValores.length; i++){
      if(acao == "aumentar" && intervaloDeValores[i] > valorBet){
        proximoValor = intervaloDeValores[i];
        break;
      }
      else if(acao == "diminuir" && intervaloDeValores[i] >= valorBet){
        proximoValor = intervaloDeValores[i];
        break;
      }
    }
  
    let indexProximoValor = intervaloDeValores.findIndex((valor) => valor == proximoValor);
    setJogo({...jogo, valorBet: (acao == "aumentar") ? intervaloDeValores[indexProximoValor] : intervaloDeValores[indexProximoValor - 1]});
  }

  const setValorBet = (valor) => {
    setJogo({...jogo,
      ['valorBet'] : valor
    });
  }

  const escolherQuantidadeDeMinas = (e) => {
    setJogo({...jogo,
      ['quantidadeDeMinas'] : e.target.value
    });
  }

  const iniciarPartida = () => {
    new Audio(inicioSound).play();
    setJogo({...jogo,
      estadojogo : "iniciou",
      indicesMinas: gerarindiceDasMinas(),
      valorCashOut: jogo.valorBet,
      valorProximoCashOut: jogo.valorBet / ((1 - (jogo.quantidadeDeMinas / 25))),
      saldo: jogo.saldo - jogo.valorBet
    });
  }

  const clicarNoCard = (indice) => {
    if(jogo.indicesMinas.includes(indice)){
      new Audio(erroSound).play();
      girarCards(indice);
    }else if(!jogo.acertos.includes(indice)){
      new Audio(acertoSound).play();
      jogo.acertos.push(indice);
      setJogo({...jogo,
        valorCashOut: jogo.valorCashOut / ((1 - (jogo.quantidadeDeMinas / 25))),
        valorProximoCashOut: jogo.valorProximoCashOut / ((1 - (jogo.quantidadeDeMinas / 25))),
        multiplicador: (jogo.valorProximoCashOut / ((1 - (jogo.quantidadeDeMinas / 25)))) / jogo.valorBet
      });
    }
  }

  const darCashOut = () => {
    new Audio(cashSound).play();
    girarCards();
  }

  const girarCards = (indiceGameOver) => {
    let novoSaldo = jogo.saldo + ((indiceGameOver) ? 0 : jogo.valorCashOut);

    setJogo({...jogo,
      indiceGameOver: indiceGameOver,
      estadojogo: "finalizou",
      girar: true,
      saldo: novoSaldo
    });

    reiniciarJogo(novoSaldo);
  }

  const reiniciarJogo = (novoSaldo) => {
    setTimeout(() => {
      setJogo({...jogo,
        saldo: novoSaldo,
        estadojogo: "pendente",
        acertos: [],
        indiceGameOver: null,
        indicesMinas: [],
        girar: false,
        valorCashOut: 0.0,
        multiplicador: 1.00,
      });
    }, 4000);
  }

  const gerarindiceDasMinas = () => {
    let indices = [];

     while(indices.length < jogo.quantidadeDeMinas){
      let numeroRandomico = Math.floor(Math.random() * 25);
      if (!indices.includes(numeroRandomico)) indices.push(numeroRandomico);
    }

    return indices;
  }


  return{
    jogo, visibilidadeValoresPredefinidos, 
    setVisibilidadeValoresPredefinidos, setValorBet, alterarValor, 
    escolherQuantidadeDeMinas, iniciarPartida, clicarNoCard, darCashOut
  };
}

export default useMines;