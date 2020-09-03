import React from "react";
import logo from "assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={`d-flex fixed-top ${styles.header}`}>
    <img src={logo} alt="Logo" />
  </header>
);

export default Header;
