import Card from "./card";
import styles from "./style.module.css";

export default function Tokenomics() {
  return (
    <div id="tokenomics" className={styles.tokenomics}>
      <div></div>
      <h1 className={styles.h1}>Tokenomics</h1>
      <div className={styles.flex}>
        <Card img="Buy" type="Buy" treasury="4" liqudity="1" />
        <Card img="Sell" type="Sell" treasury="8" liqudity="2" />
      </div>
    </div>
  );
}
