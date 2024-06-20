import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilters = () => {
    onFilterChange({
      category,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
    });
  };

  return (
    <div className="filter-panel">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="tv, audio & cameras">TV, Audio & Cameras</option>
        <option value="computers & tablets">Computers & Tablets</option>
        <option value="home appliances">Home Appliances</option>
        {/* Agrega más categorías según sea necesario */}
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
