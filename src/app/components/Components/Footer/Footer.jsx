import { Contact } from "../Contact/Contact";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Logo isFooter={true} />
      <p>by ptr.m.d</p>
      <Contact />
    </div>
  );
}
