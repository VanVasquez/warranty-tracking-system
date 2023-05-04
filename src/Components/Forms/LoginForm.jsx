import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import BlockButton from '../Styled/BlockButton';
import useAuth from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import useToggle from '../../Hooks/useToggle';
import axios from '../../Api/axios';
import AlertComponent from '../Styled/AlertComponent';
import SpinnerComponent from '../Styled/SpinnerComponent';

const LoginForm = () => {
  const { setAuth } = useAuth();
  const [check, setToggle] = useToggle('9xm14', false);
  const [formData, handleOnChange, clearForm] = useForm({
    username: '',
    password: '',
  });
  const [formMessage, setFormMessage] = useState();
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/login', formData, {
      withCredentials: true,
    });
    const accessToken = response?.data?.accessToken;
    const name = response?.data?.user;
    const user = formData.username;
    setAuth({ user, accessToken, name });
    clearForm();
    navigate('/dashboard');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h1>Login</h1>
      {loading && <SpinnerComponent animation="border" size="sm" />}
      {formMessage}
      <Form.Group controlId="loginUsername" className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="loginPassword" className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="keepLogin" className="mb-4">
        <Form.Check.Input className="me-3" checked={check} onChange={setToggle} />
        <Form.Check.Label>Keep me logged in</Form.Check.Label>
      </Form.Group>
      <BlockButton type="submit" variant="primary">
        Log in
      </BlockButton>
    </Form>
  );
};

export default LoginForm;
