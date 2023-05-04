import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/welcome-page";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Alert variant="warning">
        <Alert.Heading>Warning... Page not found</Alert.Heading>
        <p>You went too far from our site</p>
        <hr />
        <p className="mb-0">Would you like to return to the home page?</p>
        <Button variant="outline-warning" href={from}>
          Go Home
        </Button>
      </Alert>
    </div>
  );
};

export default NotFoundPage;
