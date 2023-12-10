import React from 'react';
import { useFormContext } from '../MultiStepForm';

function FinalPage() {
  const { formData } = useFormContext();

  return (
    <div data-testid='final-page'>
      <section className='layout-row align-items-center justify-content-center mt-5'>
        <p>
          <i>Thank you for submitting your information!</i>
        </p>
      </section>
      <section className='layout-row align-items-center justify-content-center mt-5'>
        <p data-testid='final-page-name'>Name: {formData.name}</p>
      </section>
      <section className='layout-row align-items-center justify-content-center mt-5'>
        <p data-testid='final-page-email'>Email: {formData.email}</p>
      </section>
    </div>
  );
}

export default FinalPage;
