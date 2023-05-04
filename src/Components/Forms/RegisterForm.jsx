import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import BlockButton from '../Styled/BlockButton';
import AlertComponent from '../Styled/AlertComponent';
import useForm from '../../Hooks/useForm';
import axios from '../../Api/axios';
import SpinnerComponent from '../Styled/SpinnerComponent';

const RegisterForm = () => {
  const [formData, handleOnChange, clearForm] = useForm({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    contacts: '',
    company: '',
    address: '',
  });
  const [loading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [validUsername, setValidUsername] = useState('');

  useEffect(() => {
    const checkEmail = async () => {
      setIsLoading(true);
      let status, message;
      try {
        const response = await axios.get(`/auth/valid?username=${formData.username}`);
        status = response.status;
        message = response.data.message;
      } catch (err) {
        status = err.response.status;
        message = err.response.data.message;
      } finally {
        setIsLoading(false);
        setValidUsername(
          <Form.Text style={{ color: status === 200 ? 'green' : 'red' }}>{message}</Form.Text>
        );
      }
    };
    if (formData.username.substring(0)) {
      checkEmail();
    }
  }, [formData.username]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { contacts } = formData;
    if (!Number(contacts) && contacts.substring(0)) {
      return setFormMessage(
        <AlertComponent variant="warning">Contacts only includes numbers</AlertComponent>
      );
    }

    try {
      const response = await axios.post('/auth/register', formData);
      if (response.status === 201) {
        console.log('created');
        setFormMessage(
          <AlertComponent variant="success">
            <h3>Congratulations!</h3>
            <p>
              your account has been registered successfully. it is currently being reviewed by
              admins. please wait for a while
            </p>
          </AlertComponent>
        );
      }
    } catch (err) {
      let variant = '';
      if (err.response.status === 400) {
        variant = 'warning';
      } else if (err.response.status === 500) {
        variant = 'danger';
      }
      setFormMessage(
        <AlertComponent variant={variant}>{err.response.data.message}</AlertComponent>
      );
    } finally {
      clearForm();
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h1>Register</h1>
      {formMessage}
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="registerFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Last name</Form.Label>

          <Form.Control
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="registerUsername" className="mb-2">
        <Form.Label>Username </Form.Label>

        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
          required
        />
        {loading && <SpinnerComponent animation="border" size="sm" />}
        {validUsername}
      </Form.Group>

      <Form.Group controlId="registerPassword" className="mb-2">
        <Form.Label>Password</Form.Label>

        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="registerContacts" className="mb-2">
        <Form.Label>Contact</Form.Label>

        <Form.Control
          type="text"
          name="contacts"
          value={formData.contacts}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group controlId="registerCompany" className="mb-2">
        <Form.Label>Company</Form.Label>

        <Form.Control
          type="text"
          name="company"
          value={formData.company}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group controlId="registerAddress" className="mb-4">
        <Form.Label>Address</Form.Label>

        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleOnChange}
        />
      </Form.Group>

      <BlockButton variant="primary" type="submit">
        Register Account
      </BlockButton>
    </Form>
  );
};

export default RegisterForm;
