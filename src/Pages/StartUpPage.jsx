import React, { useState } from 'react';
import { Card, Col, Container, Fade, Row } from 'react-bootstrap';
import BlockButton from '../Components/Styled/BlockButton';
import LoginForm from '../Components/Forms/LoginForm';
import RegisterForm from '../Components/Forms/RegisterForm';

const StartUpPage = () => {
  const [text, setText] = useState("doesn't have an account?");
  const [open, setOpen] = useState(false);

  useState(() => {
    setOpen(true);
  }, []);

  const toggleClick = () => {
    setOpen(false);
    setTimeout(() => {
      setText((prev) => {
        if (prev === "doesn't have an account?") return 'already have an account';
        else return "doesn't have an account?";
      });
      setOpen(true);
    }, 500);
  };

  const renderForm = text === "doesn't have an account?" ? <LoginForm /> : <RegisterForm />;

  return (
    <Container className="px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <Row className="gx-lg-5 align-items-center mb-5">
        <Col lg={6} className="mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fw-bold ls-tight"
            // style={{ color: `hsl(218, 81%, 85%)` }}
          >
            Warranty Tracking System
          </h1>
          <p
            className="mb-4 opacity-70"
            // style={{ color: `hsl(218, 81%, 85%)` }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maxime amet magnam
            doloremque nisi itaque quos quia dolores voluptate nesciunt quo dignissimos, tenetur
            beatae. Repudiandae doloribus porro ea saepe. Similique fugiat, voluptatem quia
            necessitatibus laborum soluta sit, sunt, vero illo iure veritatis est voluptate
            molestias a modi odit odio! Magnam?
          </p>
          <BlockButton
            variant="secondary"
            size="lg"
            aria-controls="fade-component"
            aria-expanded={open}
            disabled={!open}
            onClick={toggleClick}
          >
            {text}
          </BlockButton>
        </Col>
        <Col lg={6} className="mb-5 mb-lg-0 position-relative">
          <Card className="bg-glass">
            <Card.Body className="px-4 py-5 px-md-5">
              <Fade in={open}>
                <div className="fade=component">{renderForm}</div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StartUpPage;
