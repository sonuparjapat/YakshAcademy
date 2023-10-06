import React from 'react';

import { Chart, ArcElement } from 'chart.js';
import { Line, Pie,Doughnut } from 'react-chartjs-2';
import { Box } from "@chakra-ui/react"

Chart.register(ArcElement);

const PieChartComponent = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: true, // Set this to true to display the legend
      },
    },
  };

  return (
    <>
      {/* <h3>User's Data</h3> */}
      <Doughnut data={data} options={options} />
    </>
  );
};

export default PieChartComponent;
