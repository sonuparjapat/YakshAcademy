import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chartcomponent() {
const [chardata,setChartdata]=useState( {
    labels: [
      'Instructers',
      'Students',
      'Admins'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [0, 0, 0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  })
  const adminalldata=useSelector((state)=>state.adminloginreducer)

const { studentscount,
  instructerscount,
  frontendinstructerscount,
  backendinstructerscount,
  fullstackinstructerscount,
  frontendstudentscount,
  backendstudentscount,
  fullstackstudentscount,
  students,
  instructer,
  frontendstudents,
  backendstudents,
  fullstackstudents,
  frontendinstructers,
  backendinstructers,
  admins,
  fullstackinstructers }=adminalldata
useEffect(()=>{
setChartdata((pre)=>({...pre,datasets:[{
  label: 'My First Dataset',
  data: [instructerscount, studentscount, admins],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
  ],
  hoverOffset: 4
}]}))
},[])

  return (
    <>
      <Doughnut data={chardata}  />
    </>
  );
};
