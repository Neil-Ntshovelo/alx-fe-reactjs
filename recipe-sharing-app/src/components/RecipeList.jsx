import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes,
    recipes: state.recipes,
  }));

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;