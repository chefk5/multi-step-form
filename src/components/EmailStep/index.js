import React from 'react';
import './index.css';
import { useFormContext } from '../MultiStepForm';

function EmailStep() {
  const { formData, setFormData, isNextPageDisabled } = useFormContext();

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return (
    <div>
      <section className='layout-row align-items-center justify-content-center mt-10'>
        <label htmlFor='email' className='email-label'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          data-testid='email-input'
        />
      </section>
      <section className='layout-row align-items-center justify-content-center mt-10'>
        <p className='error-message' data-testid='email-validation-message'>
          {!formData.email || isNextPageDisabled
            ? 'Invalid Email'
            : 'Valid Email'}
        </p>
      </section>
    </div>
  );
}

export default EmailStep;
