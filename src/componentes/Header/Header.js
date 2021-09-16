import styles from '../Header.module.css';


export default function Header(){
    return(
        
        
        <div className={styles.containerHeader}>
            
            <div className={styles.textHeader}>
                <h3>Saiba na hora o quanto seu aplicativo está te cobrando em <big>%</big>, o Combinado pela UBER é de <big>25%</big></h3>
            </div>
            
        </div>
        
    )
}