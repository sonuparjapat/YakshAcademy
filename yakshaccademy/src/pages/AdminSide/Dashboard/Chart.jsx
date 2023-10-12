import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chartcomponent() {
const [chardata1,setChart1data]=useState( {
    labels: [
      'Instructers',
      'Students',
      'Admins'
    ],
    datasets: [{
      label: 'AllData',
      data: [0, 0, 0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  })

// Doughnut data2

const [chardata2,setChardata2]=useState({
  labels: [
    'frontend',
    'backend',
    'fullstack'
  ],
  datasets: [{
    label: 'Instructers',
    data: [0, 0, 0],
    backgroundColor: [
      'rgb(99, 255, 224)',
      'rgb(235, 154, 54)',
      'rgb(74, 42, 171)'
    ],
    hoverOffset: 4
  }]
})
const [chardata3,setChardata3]=useState({
  labels: [
    'frontend',
    'backend',
    'fullstack'
  ],
  datasets: [{
    label: 'Students',
    data: [0, 0, 0],
    backgroundColor: [
      'rgb(151, 54, 140)',
      'rgb(46, 140, 27)',
      'rgb(169, 101, 233)'
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
  adminscount,
  fullstackinstructers }=adminalldata

useEffect(()=>{
setChart1data((pre)=>({...pre,datasets:[{
  label: 'ALL DATA',
  data: [instructerscount, studentscount, adminscount],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
  ],
  hoverOffset: 4
}]}))
setChardata2((pre)=>({...pre,datasets:[{
  label:"InstructersData",
  data: [frontendinstructerscount?frontendinstructerscount:0, backendinstructerscount, fullstackinstructerscount],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
  ],
  hoverOffset: 4
}]}))
setChardata3((pre)=>({...pre,datasets:[{
  label: 'StudentsData',
  data: [frontendstudentscount, backendstudentscount, fullstackstudentscount],
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
    <Box>
      <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
    <Box display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="10px">
    <Box border="1px solid red" w={["80%","80%","80%","80%","80%"]} margin="auto"> <Doughnut w="100vw" height={"100vh"} data={chardata1}  /></Box> 
    <Box border="1px solid red" w={["80%","80%","80%","80%","80%"]} margin="auto"><Doughnut data={chardata2}/></Box>
    <Box border="1px solid red" w={["80%","80%","80%","80%","80%"]} margin="auto" ><Doughnut data={chardata3}/></Box>
    </Box>
    
    <Box>
      hiii
    </Box>
    
    </Box>
    
    
    </Box>
    </>
  );
};
