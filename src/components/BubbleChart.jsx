import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: data.sales.map((sale, index) => ({
          x: sale,
          y: data.profits[index],
          r: data.expenses[index] / 100,
        })),
        backgroundColor: 'rgba(249, 214, 232, 0.8)',
        borderColor: 'rgba(134, 11, 74, 0.8)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Sales',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Profits',
        },
      },
    },
  }; 

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;