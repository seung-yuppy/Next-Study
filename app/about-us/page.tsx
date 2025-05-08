import { Metadata } from "next"
import Link from "next/link"
import styles from "../../styles/aboutus.module.css";

export const metadata: Metadata = {
  title: 'About us',
}

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Link href={`https://github.com/seung-yuppy`} target="_blank"><h1 className={styles.github}>⭐️GitHub &rarr;</h1></Link>
      <h1 className={styles.github}>songsy0107@naver.com</h1>
      <h1 className={styles.github}>songsy0107@gmail.com</h1>
      <h1 className={styles.github}>010-3230-5450</h1>
    </div>
  );
};