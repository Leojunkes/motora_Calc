/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/Home.module.css';
import { useContext, useState } from 'react';
import { AiFillCar, AiOutlineCar, AiOutlinePercentage } from 'react-icons/ai';
// import { ThemeProvider } from 'styled-components';
// import { redDark } from '../styles/themes/maior25';
// import { light } from '../styles/themes/menor25';

import { Image } from 'next/image';
import fotoCalc from '../../public/imagens/MotoraCalc.png';

function Home() {
  const [clienteTotal, setClientetotal] = useState(0);
  const [valorFinal, setValorfinal] = useState(0);
  const [resultado, setResultado] = useState(0);
  //const [theme, setTheme] = useState(light);

  function calcular(e) {
    e.preventDefault();
    const meuValor = ((clienteTotal - valorFinal) / clienteTotal) * 100;
    const resultado = meuValor;
    //setTheme(theme.title === 'light' ? redDark : light);
    setResultado(resultado);
  }

  return (
    //<ThemeProvider theme={theme}>
    <div className={styles.containerGeral}>
      <div className={styles.containerInput}>
        <form onSubmit={calcular}>
          <img src="/imagens/MotoraCalc.png" alt="" />
          {/* <Image src={fotoCalc} alt="" /> */}
          {/* <label style={{marginLeft:10}}  htmlFor="">Valor corrida</label> */}
          <input
            onChange={(e) => setClientetotal(e.target.value)}
            className={styles.input1}
            type="number"
            placeholder="R$ valor cliente"
            pattern="[0-9]+([,\.][0-9]+)?"
            min="0"
            step="any"
            inputMode="numeric"
          />

          {/* <label style={{marginLeft:10}}>Teus ganhos</label> */}
          <input
            onChange={(e) => setValorfinal(e.target.value)}
            className={styles.input1}
            type="number"
            placeholder="R$ teu valor"
            pattern="[0-9]+([,\.][0-9]+)?"
            min="0"
            step="any"
          />

          <button type="submit">Calcular</button>
          <input
            className={styles.inputLimpar}
            type="reset"
            value="Limpar Valores"
          />
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
    //</ThemeProvider>
  );
}
export default Home;
