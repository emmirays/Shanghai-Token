import styles from "./style.module.css";
import Image from "next/image";

export default function Card({ img, type, treasury, liqudity, border }) {
  return (
    <>
      <div className={`${styles.card} ${border}`}>
        <div className={styles.con}>
          <Image
            src={`/${img}.png`}
            width={119}
            height={119}
            quality={100}
            alt=""
          />
          <h1 className={styles.hhf + styles.border}>{type}</h1>
          <p>{treasury}% Treasury</p>
          <p>{liqudity}% Liqudity Pool</p>
        </div>
      </div>
    </>
  );
}
