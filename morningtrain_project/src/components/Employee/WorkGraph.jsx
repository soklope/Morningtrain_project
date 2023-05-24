import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import Tooltip  from '../Navigation/Tooltip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

export const options = {
  responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text:"Trivsel på arbejde",
        align: 'start',
      },
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'ugenr',
      data: [1,2,3,4,5,8],
      borderColor: '#15cfa6',
      backgroundColor: '#15cfa6',
    }
  ],
};

export default function WorkGraph() {
  return (
  <>
  <div className='tooltip-container'>
  <Tooltip className="tooltip-icon"/>
    <div className="department-container__graph">
      <Line options={options} data={data}/>
     </div>
  </div>
  
  </>
  );
}
