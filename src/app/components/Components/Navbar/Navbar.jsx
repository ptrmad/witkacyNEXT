import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.NavBar}>
      <a href="biography">Biography</a>
      <a href="paintings">Paintings</a>
      <a href="literature">Literature</a>
    </div>
  );
}
