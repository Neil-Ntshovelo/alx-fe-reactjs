// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import recipesData from '../data.json'; // Adjust the path if necessary

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulating data fetching
      setRecipes(recipesData);
    } catch (err) {
      setError('Failed to load recipes');
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-600">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-full">
        {recipes.map(recipe => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-2 sm:p-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-600">{recipe.title}</h2>
              <p className="text-sm sm:text-base text-gray-500">{recipe.summary}</p>
              <a href={`/recipes/${recipe.id}`} className="text-red-500 hover:underline mt-1 inline-block text-sm sm:text-base">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;