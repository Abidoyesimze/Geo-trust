import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';  // Ensure Firebase is correctly initialized

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const [user, loading] = useAuthState(auth);

  // Example: Fetch user's role from your database or use Firebase claims if available
  const userRole = user?.role || '';  // Adjust this logic based on how you're handling roles

  if (loading) {
    return <div>Loading...</div>;  // Display a loading state while fetching user data
  }

  if (!user) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" />;
  }

  // If the allowedRoles array is provided and userRole doesn't match, restrict access
  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/not-authorized" />;  // Redirect to "not authorized" page if role doesn't match
  }

  // If user is authenticated and authorized, render the child component
  return children;
};

export default PrivateRoute;
