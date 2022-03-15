import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Links from "../src/components/Links/Links";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
