import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { isValidObjectId } from '../utils/mongoose';

const EditVisaRuleForm = ({ visaRuleId }) => {
  const [formData, setFormData] = useState({
    eligibilityCriteria: 'Must be over 18 years old',
    country: 'Example Country',
    visaType: 'Tourist',
    duration: '90 days',
  });

  useEffect(() => {
    const fetchVisaRule = async () => {
      try {
        const response = await axios.get(`/api/visa/rules/${visaRuleId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.data) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error fetching the visa rule:', error.response?.data);
      }
    };

    if (visaRuleId && isValidObjectId(visaRuleId)) {
      fetchVisaRule();
    }
  }, [visaRuleId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/visa/rules/${visaRuleId}`, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.data) {
        console.log('Visa rule updated');
      }
    } catch (error) {
      console.error('Error updating the visa rule:', error.response.data);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Eligibility Criteria</Form.Label>
        <Form.Control
          as='textarea'
          name='eligibilityCriteria'
          value={formData.eligibilityCriteria}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Visa Type</Form.Label>
        <Form.Control
          type="text"
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>Update Visa Rule</Button>
    </Form>
  );
};

export default EditVisaRuleForm;
