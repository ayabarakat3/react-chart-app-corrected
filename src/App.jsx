import React, { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error while fetching the JSON file', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Interactive Charts with React and Chart.js</h1>

      <div>
        <h2>Bar Chart shows Monthly Sales</h2>
        <BarChart data={data} />
      </div>

      <div>
        <h2>Line Chart shows Monthly Profits</h2>
        <LineChart data={data} />
      </div>

      <div>
        <h2>Scatter Chart shows Expenses vs Profits</h2>
        <ScatterChart data={data} />
      </div>

      <div>
        <h2>Bubble Chart shows Sales, Profits, and Expenses</h2>
        <BubbleChart data={data} />
      </div>
    </div>
  );
};

export default App;