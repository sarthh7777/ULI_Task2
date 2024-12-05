import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './RecipeList.css';

const RecipeList = ({ recipes, deleteRecipe, toggleFavourite }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes available. Please add some!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            {/* Recipe Title */}
            <h3>{recipe.title}</h3>
            {/* Recipe Category */}
            <p>{recipe.category}</p>
            {/* Recipe Actions */}
            <div className="recipe-actions">
              <Link to={`/recipe/${recipe.id}`} className="view-details">View Details</Link>
              <button onClick={() => deleteRecipe(recipe.id)} className="delete-btn">Delete</button>
              <button onClick={() => toggleFavourite(recipe.id)} className="favourite-btn">
                {recipe.isFavourite ? <FaStar /> : <FaRegStar />}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
