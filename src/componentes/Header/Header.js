import styles from '../Header.module.css';


export default function Header(){
    return(
        <div className={styles.containerHeader}>
            
            <div className={styles.textHeader}>
                <h3>Saiba na hora o quanto seu aplicativo está te cobrando em <big>%</big> com seu Motora Calc, coloque o valor da corrida(passageiro pagou) e depois os teus ganhos.</h3>
            </div>
            
        </div>
    )
}