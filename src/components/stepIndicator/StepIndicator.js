import React from "react";
import styles from "./StepIndicator.module.scss";
import PropTypes from "prop-types";

const StepIndicator = ({ currentStep }) => (
  <header
    className={`mx-auto bg-white position-fixed w-100 ${styles.indicator}`}
  >
    {/* display current step in setup form */}
    <p>Step {currentStep} of 3</p>
  </header>
);

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default StepIndicator;
