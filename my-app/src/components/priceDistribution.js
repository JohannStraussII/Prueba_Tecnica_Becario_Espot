import React from 'react';

const PriceDistribution = ({ products = [] }) => { // Inicializar products como array vacío
  const priceRanges = [
    { min: 0, max: 50, label: "$0 - $50" },
    { min: 50, max: 100, label: "$50 - $100" },
    { min: 100, max: 200, label: "$100 - $200" },
    { min: 200, max: 500, label: "$200 - $500" },
    { min: 500, max: 1000, label: "$500 - $1000" },
    { min: 1000, max: Infinity, label: "$1000 and above" },
  ];

  const distribution = priceRanges.map(range => {
    const count = products.filter(product => product.discount_price >= range.min && product.discount_price < range.max).length;
    return { ...range, count };
  });

  return (
    <div className="price-distribution">
      <h3>Price Distribution</h3>
      <ul>
        {distribution.map(range => (
          <li key={range.label}>{range.label}: {range.count}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceDistribution;
