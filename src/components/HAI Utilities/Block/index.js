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


console.log(
  "👋 Hi there! I'm Emmanuel Oyiboke, a passionate front-end developer ready for exciting opportunities! 🚀\n\n" +
  "🧑🏽‍💻 My stacks are Next.js⚛️, React, Tailwind CSS, JavaScript, HTML, and CSS 🚀\n\n" +
  "📧 Reach out to me via email at emmanueloyiboke@gmail.com, and let's discuss how we can collaborate on amazing projects together. 🌟\n\n" +
  "🐦 Connect with me on Twitter: @rays_da_dev (https://twitter.com/rays_da_dev) Follow me for tech insights 😄\n\n" +
  "💼 Find me on LinkedIn: Emmanuel Oyiboke (https://www.linkedin.com/in/emmanuel-oyiboke/) Let's expand our professional networks and explore potential synergies. 🤝\n\n" +
  "💻 Check out my GitHub: @emmirays (https://github.com/emmirays) I'd love to showcase my projects and collaborate on open source initiatives with you! 🌐\n\n" +
  "📲 You can also reach me on Telegram: @devrays (https://t.me/devrays) Feel free to drop me a message, and let's dive into fascinating tech discussions! 💬\n\n" +
  "💡 Landing Page Built by Emmanuel Oyiboke for Shanghai Token \n\n" +

  "Made with ❤️ by Emmanuel Oyiboke.",
);