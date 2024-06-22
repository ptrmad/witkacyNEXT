import { Contact } from "../Contact/Contact";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Logo isFooter={true} />
      <p>
        by <a href="https://github.com/ptrmad">ptr.m.d</a>
      </p>
      <Contact />
    </div>
  );
}
