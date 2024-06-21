import React from 'react';

const RatingDistribution = ({ products = [] }) => { // Inicializar products como array vacío
  const ratings = [1, 2, 3, 4, 5];
  const distribution = ratings.map(rating => {
    const count = products.filter(product => product.ratings === rating).length;
    return { rating, count };
  });

  return (
    <div className="rating-distribution">
      <h3>Rating Distribution</h3>
      <ul>
        {distribution.map(({ rating, count }) => (
          <li key={rating}>Rating {rating}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default RatingDistribution;
