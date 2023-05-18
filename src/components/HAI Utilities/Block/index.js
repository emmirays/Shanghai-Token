import Image from "next/image";
import styles from "./style.module.css";

export default function Block({img, type, desc}) {
  return (
    <>
      <div className={styles.flex}>
        <Image src={`/${img}.png`} width={48} height={48} alt="" />
        <p>{type}</p>
      </div>
      <p className={styles.desc}>{desc}</p>
    </>
  );
}
