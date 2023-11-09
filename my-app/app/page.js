import styles from "./page.module.css";
import { DATA } from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {Object.keys(DATA).map((item) => (
        <Link href={item}>{`${item}. ${DATA[item].title}`}</Link>
      ))}
    </main>
  );
}
