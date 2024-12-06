import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
    setIsSubmitting(true);

    // Validation
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
      if (ingredientsArray.length < 2) {
        newErrors.ingredients = 'Please provide at least two ingredients.';
      }
    }
    if (!instructions) {
      newErrors.instructions = 'Instructions are required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
    const newRecipe = {
      id: Date.now(), // Simple ID generation
      title,
      summary: instructions.substring(0, 50) + '...', // Summary from instructions
      image: 'https://via.placeholder.com/150', // Placeholder image
      ingredients: ingredientsArray,
      instructions,
    };

    onAddRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
    setSuccessMessage('Recipe added successfully!');
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-600">Add a New Recipe</h1>
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 text-center mb-4">
          {Object.values(errors).map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        {/* Recipe Title Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
            required
          />
        </div>

        {/* Ingredients Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
            rows="4"
            required
          />
        </div>

        {/* Instructions Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.instructions ? 'border-red-500' : ''}`}
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add Recipe'}
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;