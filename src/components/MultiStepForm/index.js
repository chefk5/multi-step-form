'use client';

import React, { useState, createContext, useContext } from 'react';
import NameStep from '../NameStep';
import EmailStep from '../EmailStep';
import PasswordStep from '../PasswordStep';
import FinalPage from '../FinalPage';
import './index.css';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '@/utils/validation';

export const FormContext = createContext();
export const TOTAL_STEPS = 3;

export const useFormContext = () => {
  return useContext(FormContext);
};

function ProgressIndicator({ currentStep }) {
  return (
    <div data-testid='progress-indicator'>
      <span>
        Step {currentStep + 1}/{TOTAL_STEPS}
      </span>
    </div>
  );
}

function MultiStepForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [step, setStep] = useState(0);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateStep = (step) => {
    setStep((prev) => prev + step);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <NameStep />;
      case 1:
        return <EmailStep />;
      case 2:
        return <PasswordStep />;
      case 3:
        return <FinalPage />;
      default:
        return null;
    }
  };

  const isNextPageDisabled =
    (step === 0 && !validateName(formData.name)) ||
    (step === 1 && !validateEmail(formData.email)) ||
    (step === 2 && !validatePassword(formData.password));

  return (
    <div className='layout-column align-items-center justify-content-start'>
      <FormContext.Provider
        value={{
          formData,
          setFormData: updateFormData,
          setStep: updateStep,
          isNextPageDisabled,
        }}
      >
        <div className='card w-40 pt-30 pb-8 mt-10'>
          <form onSubmit={handleFormSubmit} data-testid='step-form'>
            {renderStep()}
            {step !== TOTAL_STEPS && (
              <div>
                <section className='layout-row align-items-center justify-content-center mt-15'>
                  <button
                    onClick={() => updateStep(-1)}
                    disabled={step < 1}
                    data-testid='prev-btn'
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => updateStep(1)}
                    disabled={step > 2 || isNextPageDisabled}
                    data-testid='next-btn'
                  >
                    Next
                  </button>
                </section>
              </div>
            )}
          </form>
        </div>
        <div className='mt-20'>
          {step != TOTAL_STEPS && <ProgressIndicator currentStep={step} />}
        </div>
      </FormContext.Provider>
    </div>
  );
}

export default MultiStepForm;
