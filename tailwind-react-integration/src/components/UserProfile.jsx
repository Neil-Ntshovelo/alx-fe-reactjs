import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, description }) {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm lg:max-w-md mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150"
        alt={`${name}'s profile`} 
        className="rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mx-auto" 
      />
      <h1 className="text-lg sm:text-xl lg:text-2xl text-blue-800 my-4">{name}</h1>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600">{description}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UserProfile;