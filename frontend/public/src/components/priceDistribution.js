import React from 'react';
import Plot from 'react-plotly.js';

const PriceDistribution = ({ data }) => {
  const prices = data.map(item => item.price);
  const ratings = data.map(item => item.rating);

  return (
    <Plot
      data={[
        {
          x: prices,
          y: ratings,
          mode: 'markers',
          type: 'scatter',
        },
      ]}
      layout={{ title: 'Price vs Rating' }}
    />
  );
};

export default PriceDistribution;
