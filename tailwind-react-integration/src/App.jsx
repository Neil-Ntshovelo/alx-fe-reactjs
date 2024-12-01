import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile 
        name="John Doe" 
        description ="Developer at Example Co. Loves to write code and explore new technologies."
        imageUrl="https://example.com/johndoe.jpg"
      />
      {/* Make sure to provide all required props */}
    </div>
  );
}

export default App;