import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name , description }) {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150"
        alt={`${name}'s profile`} 
        className="rounded-full w-36 h-36 mx-auto" 
      />
      <h1 className="text-xl text-blue-800 my-4">{name}</h1>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description : PropTypes.string.isRequired,
};
UserProfile.propTypes = {

}


export default UserProfile;