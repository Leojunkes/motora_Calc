import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { AiFillCar, AiOutlineCar, AiOutlinePercentage } from 'react-icons/ai';
import { FcMoneyTransfer } from 'react-icons/fc';
import { BiCar, BiGasPump } from 'react-icons/bi';
import { SiUber } from 'react-icons/si';
import { FaCarAlt, FaCarSide, FaGasPump } from 'react-icons/fa';
import { RiGasStationFill } from 'react-icons/ri';

export default function Home() {
  const [clienteTotal, setClientetotal] = useState(0);
  const [valorFinal, setValorfinal] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcular(e) {
    e.preventDefault();
    const meuValor = ((clienteTotal - valorFinal) / clienteTotal) * 100;
    const resultado = meuValor;

    setResultado(resultado);
  }

  return (
    <div className={styles.containerGeral}>
      <div className={styles.containerInput}>
        <form onSubmit={calcular}>
          <img src="/imagens/MotoraCalc.png" alt="" />

          {/* <label style={{marginLeft:10}}  htmlFor="">Valor corrida</label> */}
          <input
            onChange={(e) => setClientetotal(e.target.value)}
            className={styles.input1}
            type="number"
            placeholder="$"
          />

          {/* <label style={{marginLeft:10}}>Teus ganhos</label> */}
          <input
            onChange={(e) => setValorfinal(e.target.value)}
            className={styles.input1}
            type="number"
            placeholder="$"
            
          />

          <button type="submit">Calcular</button>
        </form>
      </div>
      <div className={styles.totalContainer}>
        <label htmlFor="">
          Esses {resultado.toFixed(2)} % corresponde ao valor cobrado pela Uber
          e/ou outros
        </label>
        <h1>{resultado.toFixed(2)} %</h1>
      </div>
      <AiFillCar style={{ fontSize: 80, color: 'var(--blue)' }} />
    </div>
  );
}
