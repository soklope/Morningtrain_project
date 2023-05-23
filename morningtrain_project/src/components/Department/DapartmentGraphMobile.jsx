import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    }
  };
  
  const labels = ['A', 'B', 'C', 'D', 'E'];
  
  const data = {
    labels,
    datasets: [
      {
        data: [1, 2, 3, 4, 5],
        backgroundColor: '#FF9333',
        barPercentage: 0.3,
      },
    ],
  };

export default function DepartmentGraphMobile() {
    return (
        <div className="department-container__graph">
            <Bar options={options} data={data} />
        </div>
    )
}