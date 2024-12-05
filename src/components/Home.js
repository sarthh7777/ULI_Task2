
import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Filter from './Filter';
import { categories } from './data'; 
import './Home.css';

const Home = ({ recipes, deleteRecipe, toggleFavourite }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFavourites, setShowFavourites] = useState(false);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
    const matchesFavourite = showFavourites ? recipe.isFavourite : true;
    return matchesCategory && matchesFavourite;
  });

  return (
    <div className="home">
      <Filter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        showFavourites={showFavourites} 
        toggleShowFavourites={() => setShowFavourites(!showFavourites)} 
      />
      <RecipeList 
        recipes={filteredRecipes} 
        deleteRecipe={deleteRecipe} 
        toggleFavourite={toggleFavourite} 
      />
    </div>
  );
};

export default Home;
