import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Home from './pages/Home'; 
import NotFound from './pages/NotFound'; 

const App = () => {
  const isAuthenticated = false; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile/:userId/*" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;