"use client";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative`}>
    <div className={`mx-auto flex justify-between gap-8`}>
      <img src="/logo.svg" alt="logo" className="w-24" />
    </div>
  </nav>
);

export default Navbar;
