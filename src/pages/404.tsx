import Head from "next/head";
import styles from "../styles/404.module.scss";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={styles.container}>
        <img
          src={`/img/404.png`}
          alt="404"
          className={styles.container__image}
        />
        <h6 className={`${styles.container__text} red`}>Page Not Found</h6>
      </div>
    </>
  );
}
