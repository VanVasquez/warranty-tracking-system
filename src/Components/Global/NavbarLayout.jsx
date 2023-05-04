import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useLogout from '../../Hooks/useLogout';
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLock, faRightFromBracket, faUnlock } from '@fortawesome/free-solid-svg-icons';

const NavbarLayout = () => {
  const { name, accessToken } = useAuth().auth;
  const logout = useLogout();
  const currentName = name || 'unknwon user';
  const decoded = accessToken ? jwtDecode(accessToken) : undefined;
  const role = decoded?.UserInfo.role;
  const icon =
    role === 'Admin' ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faUnlock} />;

  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <FontAwesomeIcon icon={faHouse} className="me-3" />
        <div className="vr me-3"></div>
        {role} {currentName} {icon}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto me-3 align-items-center">
          <Nav.Link onClick={logout}>Logout</Nav.Link>
          <Nav.Item>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLayout;
