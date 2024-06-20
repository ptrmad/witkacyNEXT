import styles from "./Button.module.css";

export function Button({ children }) {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
}
