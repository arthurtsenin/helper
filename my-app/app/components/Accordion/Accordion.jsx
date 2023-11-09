"use client";

import { useState } from "react";

import styles from "./Accordion.module.css";
import { AccordionItem } from "../AccordionItem/AccordionItem";

export const Accordion = ({ data }) => {
  const [index, setIndex] = useState(null);

  return (
    <div className={styles.wrapper}>
      {data &&
        data.map((item) => (
          <AccordionItem
            key={item.id}
            index={index}
            setIndex={setIndex}
            item={item}
          />
        ))}
    </div>
  );
};
