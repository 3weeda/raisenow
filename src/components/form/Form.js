import React, { useState } from "react";
import styles from "./Form.module.scss";
import PropTypes from "prop-types";
import axios from "axios";

// array of all radio button data
const formData = [
  {
    value: "test",
  },
  {
    value: "production",
  },
];

const Form = ({ currentStep, setcurrentStep }) => {
  const [mode, setMode] = useState("test");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    // change mode on radio button check
    setMode(value);
  };

  const submitStep = () => {
    // start loading state
    setLoading(true);

    // POST request using local express API
    axios
      .post("/api/mode", { mode })
      .then((res) => {
        console.log("Response: ", res.data);

        // setTimeOut is used to mock an actual API loading effect
        setTimeout(() => {
          // end loading state
          setLoading(false);
        }, 1000);
      })
      .finally(() =>
        setTimeout(() => {
          setcurrentStep(currentStep + 1);
        }, 1000)
      );
  };

  const goBack = () => {
    // Go back to previous step in setup form
    setcurrentStep(currentStep - 1);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__section}>
        <h1>RaiseNow Setup</h1>
        <p>
          The RaiseNow Payment Platform requires the following parameters to be
          setup
        </p>
      </div>
      <hr className={styles.form__divider} />
      <div className={styles.form__section}>
        {currentStep === 1 ? (
          // form content, first step
          <>
            {formData.map(({ value }) => {
              const label = `${value.charAt(0).toUpperCase()}${value.substring(
                1
              )}`;
              return (
                <div className={styles.choice} key={value}>
                  <input
                    id={value}
                    type="radio"
                    name="mode"
                    value={value}
                    checked={mode === value}
                    onChange={onChange}
                  />
                  <label htmlFor={value}>
                    {/* SVG Radio button */}
                    <div className={styles.choice__left}></div>
                    <div className={styles.choice__right}>
                      <p>{label}</p>
                      <span>
                        Only transactions and subscriptions in {value} mode are
                        transferred.
                      </span>
                    </div>
                  </label>
                </div>
              );
            })}
          </>
        ) : currentStep === 2 ? (
          //  form content, second step
          <div>
            <p>Step 2</p>
          </div>
        ) : null}
      </div>
      <hr className={styles.form__divider} />
      <div className={styles.form__section}>
        <button
          className={styles.nextBtn}
          disabled={loading}
          // Submit form if on first step, otherwise go back to previous step
          onClick={currentStep === 1 ? () => submitStep() : () => goBack()}
        >
          {currentStep === 1 ? "Next" : "Back"}
        </button>
      </div>
    </div>
  );
};

Form.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setcurrentStep: PropTypes.func.isRequired,
};

export default Form;
