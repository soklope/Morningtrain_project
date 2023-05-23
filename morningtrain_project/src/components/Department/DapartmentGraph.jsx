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
  
  export const options = {
    responsive: true,
  };
  
  const labels = ['A', 'B', 'C', 'D', 'E'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5],
        backgroundColor: '#FF9333',
      },
    ],
  };

export default function DepartmentGraph() {
    return (
        <div className="department-container__graph">
            <Bar options={options} data={data} />
        </div>
    )
}