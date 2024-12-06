
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json'; // Adjust the path if necessary

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = () => {
      const foundRecipe = recipesData.find(recipe => recipe.id === parseInt(id));
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        setError('Recipe not found');
      }
      setLoading(false);
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg">Loading recipe details...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-10">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded-xl" />
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
         
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-500">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Cooking Instructions</h2>
        <p className="text-gray-500">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;