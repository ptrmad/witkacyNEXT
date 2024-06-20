import styles from "./Logo.module.css";

export function Logo({ isFooter }) {
  return (
    <div>
      <h1 className={isFooter ? styles.logoFooter : styles.logo}>Witkacy</h1>
    </div>
  );
}
