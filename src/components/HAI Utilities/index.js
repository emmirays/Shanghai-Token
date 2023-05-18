import styles from "./style.module.css";
import Block from "./Block";

export default function Utilities() {
  return (
    <div className={styles.utilities}>
      <h1>HAI Utilities</h1>
      <div className={styles.list}>
        <svg
          width="fit-content"
          height="954"
          viewBox="0 0 729 954"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M728 1H25C11.7452 1 1 11.7452 1 25V229.36C1 242.615 11.7452 253.36 25 253.36H704C717.255 253.36 728 264.105 728 277.36V475.129C728 488.383 717.255 499.129 704 499.129H25C11.7452 499.129 1 509.874 1 523.129V707.714C1 720.969 11.7452 731.714 25 731.714H704C717.255 731.714 728 742.459 728 755.714V929C728 942.255 717.255 953 704 953H1"
            stroke="#7B00F2"
            stroke-width="2"
          />
        </svg>
        <div className={styles.con}>
          <Block
            img="staking"
            type="Staking"
            desc="You can stake your $HAI to get AI generated APY returns as reward."
          />
        </div>
        <div className={styles.con}>
          <Block
            img="s-eth"
            type="$S-ETH"
            desc="When you stake your $ETH, you will get $S-ETH 
            as a reward for providing $ETH to the protocol 
            to be staked."
          />
        </div>
        <div className={styles.con}>
          <Block
            img="gov"
            type="Governance"
            desc="$HAI tokens will allow for decision making among 
            other introductions to governance that the 
            community will determine."
          />
        </div>
        <div className={styles.con}>
          <Block
            img="s-eth-2"
            type="$S-ETH"
            desc="When you stake your $ETH, you will get $S-ETH 
            as a reward for providing $ETH to the 
            protocol to be staked."
          />
        </div>
      </div>
    </div>
  );
}
