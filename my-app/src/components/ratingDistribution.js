import React from 'react';

const RatingDistribution = ({ products }) => {
  const ratingRanges = [1, 2, 3, 4, 5];
  const distribution = ratingRanges.map((range) => {
    const count = products.filter(product => {
      const rating = product.ratings;
      return Math.floor(rating) === range;
    }).length;
    return { range, count };
  });

  return (
    <div className="rating-distribution">
      <h2>Rating Distribution</h2>
      <ul>
        {distribution.map(({ range, count }) => (
          <li key={range}>Rating {range}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default RatingDistribution;
