import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CountrySelectionForm = ({ nextStep, prevStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  // Example country lists for the prototype
  const originatingCountries = ["United Kingdom", "Canada", "Mexico", "Brazil", "United States"];
  const destinationCountries = ["Japan", "Australia", "Germany", "South Africa", "India"];

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Originating Country</Form.Label>
        <Form.Control
          as="select"
          name="originatingCountry"
          value={values.originatingCountry}
          onChange={handleChange('originatingCountry')}
          required
        >
          {originatingCountries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Destination Country</Form.Label>
        <Form.Control
          as="select"
          name="destinationCountry"
          value={values.destinationCountry}
          onChange={handleChange('destinationCountry')}
          required
        >
          {destinationCountries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
};

export default CountrySelectionForm;
