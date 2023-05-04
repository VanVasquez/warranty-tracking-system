import React from 'react';
import { Breadcrumb, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useLogout from '../../Hooks/useLogout';

const NavbarLayout = () => {
  const { auth } = useAuth();
  const name = auth?.name || 'unknwon user';
  const logout = useLogout();

  return (
    <Navbar expand="lg" className="no-gutters pb-0">
      <Container fluid>
        <Breadcrumb className="align-items-center">
          <Breadcrumb.Item>
            <i className="bi bi-house-door-fill"></i>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{name}</Breadcrumb.Item>
        </Breadcrumb>
        <Navbar className="ml-auto">
          <Nav.Link onClick={logout} className="pt-0">
            Logout <i className="bi bi-box-arrow-right"></i>
          </Nav.Link>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavbarLayout;
