import classNames from "classnames";
import styles from "./AccordionItem.module.css";

export const AccordionItem = ({ index, setIndex, item }) => {
  const clickHandler = () => {
    setIndex((prev) => (prev === item.id ? null : item.id));
  };

  return (
    <button className={styles.container} onClick={clickHandler}>
      <div className={styles.text}>
        <p className={styles.title}>{item.question}</p>
        <div className={styles.icon}>{index === item.id ? "-" : "+"}</div>
      </div>
      <div
        className={classNames(styles.description, {
          [styles.open]: index === item.id,
        })}
      >
        <p>{item.answer}</p>
      </div>
    </button>
  );
};
