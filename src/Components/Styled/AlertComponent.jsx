import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = ({ children, ...rest }) => {
  const [show, setShow] = useState(true);

  const closeAlert = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <Alert {...rest} onClose={closeAlert} dismissible>
          {children}
        </Alert>
      )}
    </>
  );
};

export default AlertComponent;
