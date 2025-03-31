import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Completion %',
        data: data.map(item => item.progress),
        backgroundColor: [
          '#FF6B6B',
          '#45B7D1',
          '#4ECDC4',
          '#9D50BB'
        ],
        borderWidth: 0,
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        max: 100,
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default ProgressChart;