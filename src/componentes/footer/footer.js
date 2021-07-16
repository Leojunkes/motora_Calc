import styles from './Footer.module.css';

export default function Footer() {
  const data = new Date().getFullYear();
  return (
    <div className={styles.cointainerFooter}>
      <label htmlFor="">©LeoJunkes | {data}</label>
    </div>
  );
}
