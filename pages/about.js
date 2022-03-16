import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import HeadLine from "../src/components/HeadLine/HeadLine";
import Links from "../src/components/Links/Links";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeadLine title="About" page='about'/>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
