import { FC } from "react";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.header}>
          <h1>UwU?</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
