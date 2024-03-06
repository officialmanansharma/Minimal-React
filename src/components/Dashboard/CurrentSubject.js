import React from 'react'
import {Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2'

export const CurrentSubject = () => {

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  }

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 15, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'Blue',
            'Red',
        ],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <Radar options={options} data={data} />
  )
}