// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');
  
  // If authenticated, render the element (Component)
  // Otherwise, redirect to /login
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
