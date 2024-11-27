import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-description">
        Please <Link to="/profile/123" aria-label="View Profile 123">click here</Link> to view the profile page.
      </p>
    </div>
  );
};

export default Home;