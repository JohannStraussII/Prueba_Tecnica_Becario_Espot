import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import ProductCard from './ProductCard';
import PriceDistribution from './PriceDistribution';
import RatingDistribution from './RatingDistribution';
import '../styles/Dashboard.css'; // Asegúrate de que esta ruta sea correcta

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Muestra todos los productos inicialmente
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(product => product.main_category === filters.category);
    }
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.discount_price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.discount_price <= filters.maxPrice);
    }

    setFilteredProducts(filtered.slice(0, 10)); // Limita los productos filtrados a 10
  };

  return (
    <div className="dashboard">
      <div className="filters-and-products">
        <FilterPanel onFilterChange={handleFilterChange} />
        <div className="product-list">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="distributions">
        <PriceDistribution products={filteredProducts} />
        <RatingDistribution products={filteredProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
