
import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, toggleFavourite, deleteRecipe }) => {
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p><strong>Category:</strong> {recipe.category}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => toggleFavourite(recipe.id)} className="favourite-btn">
        {recipe.isFavourite ? 'Unfavourite' : 'Mark as Favourite'}
      </button>
      <button onClick={() => deleteRecipe(recipe.id)} className="delete-btn">Delete</button>
    </div>
  );
};

export default RecipeDetail;
