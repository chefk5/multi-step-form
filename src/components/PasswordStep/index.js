import React from 'react';
import './index.css';
import { useFormContext } from '../MultiStepForm';

function PasswordStep() {
  const { formData, setFormData, isNextPageDisabled } = useFormContext();

  const handleChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  return (
    <div>
      <section className='layout-row align-items-center justify-content-center mt-10'>
        <label htmlFor='password' className='password-label'>
          Password:
        </label>
        <input
          type='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          data-testid='password-input'
        />
      </section>
      <section className='layout-row align-items-center justify-content-center mt-10'>
        <p className='error-message' data-testid='password-validation-message'>
          {!formData.password || isNextPageDisabled
            ? 'Invalid Password'
            : 'Valid Password'}
        </p>
      </section>
    </div>
  );
}

export default PasswordStep;
