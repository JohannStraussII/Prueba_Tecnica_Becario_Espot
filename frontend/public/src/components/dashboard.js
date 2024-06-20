import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import FilterPanel from './FilterPanel';
import RatingDistribution from './RatingDistribution';
import PriceDistribution from './PriceDistribution';
import ProductCard from './ProductCard';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios.get('http://localhost:5000/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch initial data
    fetchData('Electronics');
  }, []);

  const fetchData = (category) => {
    axios.get(`http://localhost:5000/api/products/${category}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    fetchData(category);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    fetchData('Electronics');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FilterPanel
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        resetFilters={resetFilters}
      />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RatingDistribution data={data} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PriceDistribution data={data} />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {data.map((product, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
