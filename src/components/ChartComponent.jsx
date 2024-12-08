import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend, Title, BubbleElement, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  BubbleElement,
  Filler
);
// *i have no idea what this code is but the internet says its the only thing to remove the 3920 errors im getting 
const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new ChartJS(chartRef.current, {
      type: type,
      data: data,
      options: options,
    });

    return () => {
      if (chartRef.current) {
        chart.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;