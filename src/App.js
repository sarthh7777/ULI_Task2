import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';
import Filter from './components/Filter';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const toggleFavourite = (id) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavourite: !recipe.isFavourite } : recipe
      )
    );
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (categoryFilter === 'All' || recipe.category === categoryFilter) &&
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setCategoryFilter={setCategoryFilter} setSearchQuery={setSearchQuery} />
                <RecipeList
                  recipes={filteredRecipes}
                  deleteRecipe={deleteRecipe}
                  toggleFavourite={toggleFavourite}
                />
              </>
            }
          />
          <Route
            path="/add-recipe"
            element={<RecipeForm addRecipe={addRecipe} />}
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetailContainer recipes={recipes} toggleFavourite={toggleFavourite} deleteRecipe={deleteRecipe} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// RecipeDetailContainer Component to fetch the recipe based on the id parameter
const RecipeDetailContainer = ({ recipes, toggleFavourite, deleteRecipe }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <RecipeDetail
      recipe={recipe}
      toggleFavourite={toggleFavourite}
      deleteRecipe={deleteRecipe}
    />
  );
};

export default App;
