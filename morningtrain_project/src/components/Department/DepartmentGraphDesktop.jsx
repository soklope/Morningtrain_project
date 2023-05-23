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

export default function DepartmentGraphDesktop() {
    return (
        <div className="department-container__graph">
            <div>Tags anvendt fra design afdelingen de sidste 10 uger</div>
            <div className="department-container__graph__frame">
                <Bar options={options} data={data} />
            </div>
            <div className="department-container__labels">
                <div>Jeg savner frihed til at beslutte hvornår og hvordan jeg udfører mit arbejde'</div>
                <div>Mit arbejde føles overflødigt</div>
                <div>Jeg kan ikke følge mine opgaver til ende</div>
                <div>Mit arbejde er enkelt og repetitivt</div>
                <div>Jeg mangler feedback på om jeg gør mit arbejde godt</div>
            </div>
        </div>
    )
}



