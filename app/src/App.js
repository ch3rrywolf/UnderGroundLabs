import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AuthService from './services/AuthService';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Auth from './components/Auth/Auth';

const UnProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = AuthService.isLoggedIn();

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Element/>;
}

const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = AuthService.isLoggedIn();

  return isAuthenticated ? <Element/> : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Unprotected Routes */}
        <Route path='/' element={ <Navigate to="/login" /> } />
        <Route path='/login' element={ <UnProtectedRoute element={ Login } /> } />
        <Route path='/register' element={ <UnProtectedRoute element={ Register } /> } />
        <Route path='/forgot-password' element={ <UnProtectedRoute element={ ForgotPassword } /> } />

        {/* Protected Routes */}
        <Route path='/dashboard' element={ <ProtectedRoute element={ Dashboard } /> } />
        
        <Route path='/auth' element={ <Auth /> } />
      </Routes>
    </Router>
    
  );
}

export default App;
