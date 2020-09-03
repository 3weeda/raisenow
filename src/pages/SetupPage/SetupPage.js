import React, { useState } from "react";
import { Header, StepIndicator, Form } from "components";
import { Layout, Content } from "shared";
import styles from "./SetupPage.module.scss";
import bg from "assets/bg-vector.svg";

const SetupPage = () => {
  // current step in setup form
  const [currentStep, setcurrentStep] = useState(1);

  return (
    <Layout>
      <Header />
      <StepIndicator currentStep={currentStep} />
      <Content flex>
        <img className={styles.illustration} src={bg} alt="Illustration" />
        <Form currentStep={currentStep} setcurrentStep={setcurrentStep} />
      </Content>
    </Layout>
  );
};

export default SetupPage;
