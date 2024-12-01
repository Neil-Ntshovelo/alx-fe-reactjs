import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, description }) {
  return (
    <div className="user-profile bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150"
        alt={`${name}'s profile`} 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto" 
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4">{name}</h1>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UserProfile;