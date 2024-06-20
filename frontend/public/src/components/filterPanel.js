import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import CategoryDropdown from './CategoryDropdown';

const FilterPanel = ({ categories, selectedCategory, handleCategoryChange, resetFilters }) => {
  return (
    <Box sx={{ width: 300, p: 2, borderRight: '1px solid #ddd' }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <CategoryDropdown categories={categories} selectedCategory={selectedCategory} handleChange={handleCategoryChange} />
      <Divider sx={{ my: 2 }} />
      <Button variant="contained" color="primary" fullWidth onClick={resetFilters}>
        Reset Filters
      </Button>
    </Box>
  );
};

export default FilterPanel;
