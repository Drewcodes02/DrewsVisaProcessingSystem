import React from 'react';
import { Button, Form } from 'react-bootstrap';

const PersonalInfoForm = ({ nextStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange('firstName')}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange('lastName')}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange('dateOfBirth')}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nationality</Form.Label>
        <Form.Control
          type="text"
          name="nationality"
          value={values.nationality}
          onChange={handleChange('nationality')}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
};

export default PersonalInfoForm;
