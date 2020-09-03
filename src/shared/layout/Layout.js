import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  // layout for the entire app
  <div className={styles.layout}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
