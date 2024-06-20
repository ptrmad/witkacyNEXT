"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.logoContainer}>
      <Logo isFooter={false} />
      <div className={styles.Navbar}>
        <Link
          href="/biography"
          className={pathname === "/biography" ? styles.active : ""}
        >
          Biography
        </Link>
        <Link
          href="/paintings"
          className={pathname === "/paintings" ? styles.active : ""}
        >
          Paintings
        </Link>
        <Link
          href="/literature"
          className={pathname === "/literature" ? styles.active : ""}
        >
          Literature
        </Link>
      </div>
    </div>
  );
}
