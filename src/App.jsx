import React, { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Interactive Financial Dashboard</h1>
      <BarChart data={chartData.sales} />
      <LineChart data={chartData.profits} />
      <ScatterChart data={chartData.expenses} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App;