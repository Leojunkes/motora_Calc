import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [clienteTotal, setClientetotal] = useState(0);
  const [valorFinal, setValorfinal] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcular(e) {
    e.preventDefault();
    const meuValor = (clienteTotal - valorFinal) / clienteTotal * 100;
    const resultado = meuValor
   

    console.log(resultado);
    setResultado(resultado);
  }

  return (
    <div className={styles.containerGeral}>
      <div className={styles.containerInput}>
        <form onSubmit={calcular}>
          <img src="/imagens/MotoraCalc.png" alt="" />
          <input
            onChange={(e) => setClientetotal(e.target.value)}
            className={styles.input1}
            type="numeric"
          />
          <input
            onChange={(e) => setValorfinal(e.target.value)}
            className={styles.input1}
            type="numeric"
          />
          <button type="submit">Calcular</button>
        </form>
      </div>
    </div>
  );
}
