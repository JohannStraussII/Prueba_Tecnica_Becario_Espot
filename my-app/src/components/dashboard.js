import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import ProductCard from './ProductCard';
import PriceDistribution from './PriceDistribution';
import RatingDistribution from './RatingDistribution';
import Pagination from './Pagination'; // Asegúrate de crear este componente
import '../styles/Dashboard.css'; // Ruta corregida

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

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

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset page to 1 when filters change
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dashboard">
      <div className="filters-and-products">
        <FilterPanel onFilterChange={handleFilterChange} />
        <div className="product-list">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className="distributions">
        <PriceDistribution products={filteredProducts} />
        <RatingDistribution products={filteredProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
