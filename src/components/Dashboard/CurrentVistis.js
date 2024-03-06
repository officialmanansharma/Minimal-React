import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'



export const CurrentVistis = () => {

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  }
    
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
      labels: ['Red', 'Green', 'Blue'],
      datasets: [
        {
          label: '# of Votes',
          data: [40, 60, 20],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(53, 162, 235)',
          ],
        },
      ],
    };
  return (
    <Pie options={options} data={data} />
  )
}
