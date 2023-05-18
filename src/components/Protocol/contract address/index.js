import styles from "./style.module.css";

export default function ContactAddress({address}) {
    return(
        <>
        <div className={styles.conadd}>
            <p>Contract: <span>{address}</span></p>
        </div>
        </>
    )
}