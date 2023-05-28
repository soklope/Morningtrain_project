import { useState } from 'react';
import Tooltip from '../Navigation/Tooltip.jsx';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { countLetterOccurrences, getAllTagsInOrder } from '../../HelperFunctions.js';
import { employeeArray } from '../../db.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
  );
  
export default function DepartmentGraphMobile() {
  const [tagsForEachEmployee] = useState(getAllTagsInOrder(employeeArray)) 
  const [tagsData] = useState(countLetterOccurrences(tagsForEachEmployee))

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
        data: tagsData,
        backgroundColor: '#FF9333',
        barPercentage: 0.3,
      },
    ],
  };

  return (
    <div className="department-container__graph">
      <div className='department-container__graph__flex'>
        <div className='department-container__graph__title'>ANVENDTE TAGS</div>
        <Tooltip 
          headline={"HYPPIGSTE TAGS"} 
          input={"Denne graf viser en oversigt over de tags, afdelingen har angivet de sidste 10 uger."}
          input2={"Dette kunne måske være relevant at snakke om, til næste OKR møde."}
          />
      </div>

      <div className='department-container__graph__frame'>
        <Bar options={options} data={data} />
      </div>

    </div>
  )
}