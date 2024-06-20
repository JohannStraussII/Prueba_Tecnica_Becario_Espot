import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CategoryDropdown = ({ categories, selectedCategory, handleChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="category-label">Select Category</InputLabel>
      <Select
        labelId="category-label"
        value={selectedCategory}
        label="Select Category"
        onChange={handleChange}
      >
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
