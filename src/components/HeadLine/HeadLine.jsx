import styles from "../../../styles/Home.module.css";

export default function HeadLine(props) {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>
        <code className={styles.code}>{props.page}s</code>
      </p>
    </>
  );
}
