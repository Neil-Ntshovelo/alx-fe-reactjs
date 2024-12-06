
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import { useState } from 'react';
import recipesData from './data.json'; 

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/RecipeDetails/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
};

export default App;