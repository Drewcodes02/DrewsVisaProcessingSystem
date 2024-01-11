import React from 'react';
import { Button } from 'react-bootstrap';

const VisaTypeSuggestion = ({ prevStep, values }) => {
  const handleSubmit = () => {
    // This is where you would handle the visa suggestion based on the selected countries
    console.log('Visa type suggestion logic to be implemented');
  };

  return (
    <>
      <h2>Visa Type Suggestion</h2>
      {/* Suggestion elements to be added here. For now we just log to console */}
      <Button variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default VisaTypeSuggestion;
