import styles from "./Contact.module.css";
export function Contact() {
  return (
    <div className={styles.contact}>
      <p>Contact:</p>
      <p>
        {" "}
        <a href="https://github.com/ptrmad">GitHub</a>
      </p>
      <p>
        <a href="https://pmd-portfolio.netlify.app">Portfolio Page</a>
      </p>
    </div>
  );
}
