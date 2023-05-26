import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Tooltip  from '../Navigation/Tooltip';
import { getLast10WeekNumbers } from '../../HelperFunctions';
import useEmployeeStore from '../../employeeStore';
import { getRecentWorkData } from '../../HelperFunctions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

export default function PrivateGraph() {
  const employee = useEmployeeStore((state) => state.employee);
  const weekData = getLast10WeekNumbers()
  
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
    },
    scales: {
      x: {
        suggestedMin: 0,
        suggestedMax: 100
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
  };
  
  const labels = weekData;
  
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: getRecentWorkData(employee.privateData),
        borderColor: '#15cfa6',
        backgroundColor: '#15cfa6',
      }
    ],
  };

  
  return (
    <>
      <div className="e-container__graph">
          <div className='e-container__graph__flex'>
            <div>
              <div className='e-container__graph__title'>TRIVSEL UDEN FOR ARBEJDET</div>
              <div className='e-container__graph__sub'>SIDSTE 10 UGER</div>
            </div>
            <Tooltip 
              headline={"TRIVSEL UDEN FOR ARBEJDE"} 
              input={"Den graf viser en oversigt over medarbejderens angivne trivsel, uden for arbejdet"}
              input2={"Dette kunne måske være relevant at snakke om, til næste 1 til 1 samtale."}
              />
          </div>

          <div className='e-container__graph__frame'>
            <Line options={options} data={data} />
          </div>
        </div>
    </>
  );
}
