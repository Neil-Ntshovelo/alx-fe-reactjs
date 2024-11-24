import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    // Confirm before deleting
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/recipes'); // Redirect to the recipes list after deletion
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;