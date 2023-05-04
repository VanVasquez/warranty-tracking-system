import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import jwtDecode from 'jwt-decode';

const pages = {
  '/dashboard': 'Dashboard',
  '/request': 'Request',
  '/client': 'Clients',
  '/change-password': 'Change Password',
  '/admin': 'Admin Only',
};

const PaginationLayout = () => {
  const { accessToken } = useAuth().auth;
  const location = useLocation();
  const from = location.pathname;
  const navigate = useNavigate();
  const decoded = accessToken ? jwtDecode(accessToken) : undefined;
  const role = decoded?.UserInfo.role;

  const navigateTo = (link) => {
    navigate(link);
  };

  const renderPagination = Object.entries(pages).map(([link, page]) => {
    if (role !== 'Admin' && link === '/admin') {
      return;
    }
    return (
      <Pagination.Item
        key={link}
        active={link === from}
        onClick={() => navigateTo(link)}
        style={{ transition: 'all 1s ease-in-out' }}
      >
        {page}
      </Pagination.Item>
    );
  });

  return <Pagination>{renderPagination}</Pagination>;
};

export default PaginationLayout;
