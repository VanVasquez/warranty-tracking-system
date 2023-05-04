import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import useAuth from '../../Hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;
  const role = decoded?.UserInfo?.role || '';
  console.log(role);
  return allowedRoles?.includes(role) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
