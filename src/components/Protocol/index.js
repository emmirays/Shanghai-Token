import styles from "./style.module.css";
import Image from "next/image";
import ContactAddress from "./contract address";

export default function Protocol() {
  return (
    <div className={styles.protocol}>
      <h1>HAI Protocol</h1>
      <div className={styles.txt}>
        <p>
          $HAI protocol works as a middleman in the chain of command between you
          and large liquid staking protocols to provide the safest and highest
          possible passive returns on your liquid assets.
        </p>
        <p>
          Our team is a start-up, and we are not taking any money from the
          Marketing Wallet. With the faith and effort from the community, we are
          going to continue to push a top tier premium DeFi protocol on this
          platform and will continue to bring value and utility.
        </p>
      </div>
      <Image src="/Backdrop.png" width={738} height={638} alt="" />
      <ContactAddress address="0xdd34ab9b1450156928bc05f8ac6bf82af3d96519" />
    </div>
  );
}
