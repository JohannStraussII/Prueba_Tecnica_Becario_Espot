import React from 'react';

const CategoryDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;