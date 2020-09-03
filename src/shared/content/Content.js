import React from "react";
import PropTypes from "prop-types";
import styles from "./Content.module.scss";

const Content = ({ children, flex }) => {
  return (
    // wrapper for the content beneath navbar and step indicator
    <main className={`${flex && "d-flex"} ${styles.content}`}>{children}</main>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
