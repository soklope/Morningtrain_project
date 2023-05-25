import { useState } from 'react';
import Tooltip from '../Navigation/Tooltip';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { countLetterOccurrences } from '../../HelperFunctions';
import { getAllTagsInOrder } from '../../HelperFunctions';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
  );
  
export default function DepartmentGraphDesktop() {
  const employeeArray = JSON.parse(localStorage.getItem("employeeData"))
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
        barPercentage: 0.15,
      },
    ],
  };

  return (
      <div className="department-container__graph">
        <div className='department-container__graph__flex'>
          <div className='department-container__graph__title'>ANVENDTE TAGS - DE SIDSTE 10 UGER</div>
          <Tooltip 
            headline={"HYPPIGSTE TAGS"} 
            input={"Denne graf viser en oversigt over de tags, afdelingen har angivet de sidste 10 uger."}
            input2={"Dette kunne måske være relevant at snakke om,til næste OKR møde."}
          />
        </div>

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