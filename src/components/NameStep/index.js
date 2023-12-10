import React, { useContext } from 'react';
import './index.css';
import FormContext, { useFormContext } from '../MultiStepForm';

function NameStep() {
  const { formData, setFormData, isNextPageDisabled } = useFormContext();

  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  return (
    <div>
      <section className='layout-row align-items-center justify-content-center mt-10'>
        <label htmlFor='name' className='name-label'>
          Name:
        </label>
        <input
          type='text'
          id='name'
          value={formData.name}
          onChange={handleChange}
          data-testid='name-input'
        />
      </section>
      <section className='layout-row align-items-center justify-content-center mt-10'>
        <p className='error-message' data-testid='name-validation-message'>
          {!formData.name || isNextPageDisabled ? 'Invalid Name' : 'Valid Name'}
        </p>
      </section>
    </div>
  );
}

export default NameStep;
