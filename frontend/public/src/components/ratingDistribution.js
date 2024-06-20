import React from 'react';
import Plot from 'react-plotly.js';

const RatingDistribution = ({ data }) => {
  const ratings = data.map(item => item.rating);

  return (
    <Plot
      data={[
        {
          x: ratings,
          type: 'histogram',
        },
      ]}
      layout={{ title: 'Rating Distribution' }}
    />
  );
};

export default RatingDistribution;
