import React from 'react';
import { useRecipeStore } from '../stores/useRecipeStore';

const DeleteRecipeButton = ({ recipe}) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipe);
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;