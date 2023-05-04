import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const pages = {
  '/dashboard': 'Dashboard',
  '/request': 'Request',
  '/client': 'Clients',
  '/change-password': 'Change Password',
};

const PaginationLayout = () => {
  const location = useLocation();
  const from = location.pathname;
  const navigate = useNavigate();

  const navigateTo = (link) => {
    navigate(link);
  };
  const renderPagination = Object.entries(pages).map(([link, page]) => {
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
