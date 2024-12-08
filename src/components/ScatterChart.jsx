import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: 'rgba(134, 11, 74, 0.8)',
        borderColor: 'rgba(134, 11, 74, 0.8)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(249, 214, 232, 0.8)',
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profits',
        },
      },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;