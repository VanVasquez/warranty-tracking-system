import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLayout from '../Global/NavbarLayout';
import PaginationLayout from '../Global/PaginationLayout';
import { Container, Stack } from 'react-bootstrap';

const Layout = () => {
  return (
    <Stack gap={2} className="m-2">
      <NavbarLayout />
      <PaginationLayout />
      <Container fluid className="mx-auto">
        <Outlet />
      </Container>
    </Stack>
  );
};

export default Layout;
