import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import ProductCard from './ProductCard';
import PriceDistribution from './PriceDistribution';
import RatingDistribution from './RatingDistribution';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Cargar los productos desde la base de datos o un archivo
    fetch('/path/to/your/products.json')  // Asegúrate de actualizar esta ruta
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter((product) => product.discount_price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter((product) => product.discount_price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="dashboard">
      <FilterPanel categories={categories} onFilterChange={handleFilterChange} />
      <PriceDistribution products={filteredProducts} />
      <RatingDistribution products={filteredProducts} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
