import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('Breakfast');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && ingredients && instructions) {
      addRecipe({
        title,
        ingredients,
        instructions,
        category,
        id: Date.now(),
        isFavourite: false,
      });
      setTitle('');
      setIngredients('');
      setInstructions('');
    }
  };

  return (
    <div className="recipe-form">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
