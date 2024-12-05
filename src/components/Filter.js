import React from 'react';
import './Filter.css';

const Filter = ({ setCategoryFilter, setSearchQuery }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search recipes"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;
