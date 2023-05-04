import React from 'react';
import { Button } from 'react-bootstrap';

const BlockButton = ({ children, size, ...rest }) => {
  return (
    <div className="d-grid gap-2">
      <Button {...rest} size={size ? size : 'lg'}>
        {children}
      </Button>
    </div>
  );
};

export default BlockButton;
