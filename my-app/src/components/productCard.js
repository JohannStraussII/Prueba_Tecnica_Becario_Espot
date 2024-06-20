import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>Rating: {product.ratings}</p>
      <p>Price: ${product.discount_price}</p>
    </div>
  );
};

export default ProductCard;
