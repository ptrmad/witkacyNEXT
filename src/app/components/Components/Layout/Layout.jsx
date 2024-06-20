import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.topBar}>
          <NavLink to="biography">
            <Logo />
          </NavLink>
          <Navbar />
        </div>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
        <div>
          <Footer className={styles.footer} />
        </div>
      </div>
    </>
  );
}
