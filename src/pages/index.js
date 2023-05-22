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


console.log(
  "👋 Hi there! I'm Emmanuel Oyiboke, a passionate front-end developer ready for exciting opportunities! 🚀\n\n" +
  "🧑🏽‍💻 My stacks are Next.js⚛️, React, Tailwind CSS, JavaScript, HTML, and CSS 🚀\n\n" +
  "📧 Reach out to me via email at emmanueloyiboke@gmail.com, and let's discuss how we can collaborate on amazing projects together. 🌟\n\n" +
  "🐦 Connect with me on Twitter: @rays_da_dev (https://twitter.com/rays_da_dev) Follow me for tech insights 😄\n\n" +
  "💼 Find me on LinkedIn: Emmanuel Oyiboke (https://www.linkedin.com/in/emmanuel-oyiboke/) Let's expand our professional networks and explore potential synergies. 🤝\n\n" +
  "💻 Check out my GitHub: @emmirays (https://github.com/emmirays) I'd love to showcase my projects and collaborate on open source initiatives with you! 🌐\n\n" +
  "📲 You can also reach me on Telegram: @devrays (https://t.me/devrays) Feel free to drop me a message, and let's dive into fascinating tech discussions! 💬\n\n" +

  "Made with ❤️ by Emmanuel Oyiboke.",
);


