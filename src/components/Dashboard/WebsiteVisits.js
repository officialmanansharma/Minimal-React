import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export const WebsiteVisits = () => {
    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
      );

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      const data = {
        labels,
        datasets: [
          {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            fill: false,
            data: labels.map(() => faker.datatype.number({max: 1000 })),
          },
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: labels.map(() => faker.datatype.number({max: 1000 })),
            borderColor: 'white',
            borderWidth: 1,
          },
          {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: labels.map(() => faker.datatype.number({max: 1000 })),
          },
        ],
      };
  return (
    <Chart type='bar' data={data} />
  )
}
