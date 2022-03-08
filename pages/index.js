import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
