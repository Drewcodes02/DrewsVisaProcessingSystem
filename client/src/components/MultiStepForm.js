import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import CountrySelectionForm from './CountrySelectionForm';
import VisaTypeSuggestion from './VisaTypeSuggestion';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    originatingCountry: '',
    destinationCountry: '',
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfoForm
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <CountrySelectionForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <VisaTypeSuggestion
          prevStep={prevStep}
          values={formData}
        />
      );
    default:
      return <h1>Error</h1>;
  }
};

export default MultiStepForm;
