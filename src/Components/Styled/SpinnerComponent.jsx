import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SpinnerComponent = ({ ...rest }) => {
  return <FontAwesomeIcon icon={faCircleNotch} {...rest} spin />;
};

export default SpinnerComponent;
