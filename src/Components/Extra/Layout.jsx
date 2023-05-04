import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLayout from '../Global/NavbarLayout';
import PaginationLayout from '../Global/PaginationLayout';

const Layout = () => {
  return (
    <>
      <NavbarLayout />
      <PaginationLayout />
      <Outlet />
    </>
  );
};

export default Layout;
