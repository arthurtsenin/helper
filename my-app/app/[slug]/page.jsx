"use client";

import { useRouter } from "next/navigation";
import { Accordion } from "../components/Accordion/Accordion";
import { DATA } from "../data";
import styles from "./page.module.css";

export default function PagePage({ params }) {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <button className={styles.button} onClick={() => router.back()}>
        НАЗАД
      </button>
      <div className={styles.container}>
        <Accordion data={DATA[params.slug]?.description} />
      </div>
      <button className={styles.button} onClick={() => router.back()}>
        НАЗАД
      </button>
    </section>
  );
}
