import React from 'react';

const PriceDistribution = ({ products }) => {
  const priceRanges = [0, 50, 100, 200, 500, 1000];
  const distribution = priceRanges.map((range, index) => {
    const count = products.filter(product => {
      const price = product.discount_price;
      return price >= range && price < (priceRanges[index + 1] || Infinity);
    }).length;
    return { range, count };
  });

  return (
    <div className="price-distribution">
      <h2>Price Distribution</h2>
      <ul>
        {distribution.map(({ range, count }) => (
          <li key={range}>${range} - ${priceRanges[distribution.indexOf({ range, count }) + 1] || 'and above'}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceDistribution;
