import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/add-recipe" className="navbar-link">Add Recipe</Link>
    </div>
  );
};

export default Navbar;
