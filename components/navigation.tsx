"use client"; // backend에서 render하고 frontend에서 hydrate됨 (next js는 걍 무조건 SSR이다)

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css"

const Navigation = () => {
  const path = usePathname();
  const [count, setCount] = useState<number>(0);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href={"/"} style={{ textDecoration: "none" }}>Home</Link> {path === "/" ? "🐱" : ""}
        </li>
        <li>
          <Link href={"/about-us"} style={{ textDecoration: "none" }}>About Us</Link> {path === "/about-us" ? "🐱" : ""}
        </li>
        <li>
          <Link href={"/about-us/company/jobs/sales"} style={{ textDecoration: "none" }}>Sales</Link> {path === "/about-us/company/jobs/sales" ? "🐱" : ""}
        </li>
        <li>
          <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;