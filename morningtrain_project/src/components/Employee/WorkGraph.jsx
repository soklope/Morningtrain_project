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
import { getLast10WeekNumbers } from '../../HelperFunctions';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);





export default function PrivateGraph() {
 const weekData = getLast10WeekNumbers()
 console.log(weekData)
 const canvasBackgroundColor = {
    id:'canvasBackgroundColor',
    beforeDraw(Chart, args, pluginOptions){
      
    }
  }
  
   const options = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text:"Trivsel udenfor arbejde",
        align: 'start',
      },canvasBackgroundColor: 'red',
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
        data: [1,2,3,4,5,8],
        borderColor: '#15cfa6',
        backgroundColor: '#15cfa6',
      }
    ],
  };
  
  return (
  <>
  
  <div className="department-container__graph">
      <div className='department-container__graph__flex'>
        <div className='department-container__graph__title'>Trivsel på arbejde</div>
        <Tooltip 
          headline={"AFDELINGSGRAF"} 
          input={"Denne graf viser en oversigt over de tags, afdelingen har angivet de sidste 10 uger."}
          input2={"Dette kunne måske være relevant at snakke om,til næste OKR møde."}
          />
      </div>
      <div>
      <Line options={options} data={data} />
      
    </div>

    </div>
  </>
  
  );
}
