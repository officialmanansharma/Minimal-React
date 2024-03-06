import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export const ConversationRates = () => {
    
    const options = {
        plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked',
            },
            legend: {
                position: 'bottom',
            }
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
          },
          {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgb(53, 162, 235)',
            stack: 'Stack 1',
          },
        ],
    };

  return (
    <Bar options={options} data={data} />
    )
}
