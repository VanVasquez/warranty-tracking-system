import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLayout from '../Global/NavbarLayout';
import PaginationLayout from '../Global/PaginationLayout';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Container fluid>
        <NavbarLayout />
        <PaginationLayout />
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
