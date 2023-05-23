import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [1,2,3,4,5,8],
      borderColor: '#15cfa6',
      backgroundColor: '#15cfa6',
    }
  ],
};

export default function WorkGraph() {
  return (
  <div className="department-container__graph">
  <Line options={options} data={data} />
  </div>
  );
}
