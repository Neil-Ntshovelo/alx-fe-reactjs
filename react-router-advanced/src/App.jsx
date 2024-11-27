import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BlogPost from './components/BlogPost'; // Import the BlogPost component

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
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add the BlogPost route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;