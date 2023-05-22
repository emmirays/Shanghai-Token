import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Whirl from "/public/whirl.png";
import Tokenomics from "@/components/Tokenomics";
import Protocol from "@/components/Protocol";
import Utilities from "@/components/HAI Utilities";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shanghai</title>
        <meta
          name="description"
          content="Liquid staking with HAI while earning passive income."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.txt}>
            <h1>
              Staking done right <span>Earning in sight</span>
            </h1>
            <p>Liquid staking with HAI while earning passive income.</p>
            <button>Launch App</button>
          </div>
          <Image
            src={Whirl}
            width={683}
            height={643}
            quality={100}
            priority={true}
            alt=""
          />
        </div>
        <Tokenomics />
        <Protocol />
        <Utilities />
        <Footer />
      </main>
    </>
  );
}
