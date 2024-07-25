import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Navigate to="/login" /> } />

        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />

        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
    </Router>
    
  );
}

export default App;
