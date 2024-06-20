import styles from './SeletorQuantidadeDeMinas.module.css';


export default function SeletorQuantidadeDeMinas({jogo, escolherQuantidadeDeMinas}){

  return(
    <div className={styles.seletorMinas}>
      <select
        onChange={(e) => escolherQuantidadeDeMinas(e)}
        value={jogo.quantidadeDeMinas || 3}
        disabled={(jogo.estadojogo == "iniciou")}
      >
        {
          jogo.numeros.filter((numero) => numero < 20)
          .map((numero) => (
            <option
              key={numero}
              value={numero+1}
            >
              {numero+1}
            </option>
          ))
        }
      </select>

      <label >Mines: {jogo.quantidadeDeMinas}</label>
    </div>
  )
}