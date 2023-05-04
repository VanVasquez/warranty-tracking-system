import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import BlockButton from '../Styled/BlockButton';
import useAuth from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import useToggle from '../../Hooks/useToggle';

const LoginForm = () => {
  const { setAuth } = useAuth();
  const [check, setToggle] = useToggle('9xm14', false);
  const [formData, handleOnChange, clearForm] = useForm({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const user = formData.username;
    setAuth({ user });
    clearForm();
    navigate('/dashboard');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h1>Login</h1>
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
