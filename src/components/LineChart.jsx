import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Profits',
        data: data.profits,
        borderColor: 'rgba(134, 11, 74, 0.8)',
        backgroundColor: 'rgba(249, 214, 232, 0.8)',
        fill: false,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;