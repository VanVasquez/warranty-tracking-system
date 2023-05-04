import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerComponent = ({ ...rest }) => {
  return <Spinner {...rest} />;
};

export default SpinnerComponent;
