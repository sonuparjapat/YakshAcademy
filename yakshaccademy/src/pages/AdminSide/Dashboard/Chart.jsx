import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import {

  CategoryScale,
  LinearScale,
  BarElement,
  Title,
 } from 'chart.js';

import { useSelector } from 'react-redux';
import { Box, Center, Text, VStack } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,
  LinearScale,
  BarElement,
  Title,);


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
const [bardata,setBardata]=useState({
    labels: ["FrontendInst","BackendInst","FullstackInst","FrontendStd.","BackendStd","FullstackStd"],
    datasets: [{
      label: 'All Users Data',
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
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

setBardata((pre)=>({...pre,datasets:[{
  label: 'Particular Data',
  data: [frontendinstructerscount,backendinstructerscount, fullstackinstructerscount,frontendstudentscount, backendstudentscount, fullstackstudentscount],
  backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)'
   
  ],
  borderColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)'
    
  ],
  borderWidth: 1
}]}))
},[])

  return (
    <>
    <Box  >
      <Box  w="80%" margin="auto" mt="20px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="30px">
<Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" borderRadius={"15px"} bg="#F8BBD0" height="150px" width="250px"></Box>
<Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  borderRadius={"15px"} height="150px" width="250px"  bg="#F06292" > </Box>
<Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  borderRadius={"15px"} height="150px" width="250px"  bg="#B3E5FC" ></Box>
<Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" borderRadius={"15px"}  height="150px" width="250px"  bg="#F4511E" ></Box>
<Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  borderRadius={"15px"}  height="150px" width="250px" bg="#FFAB40" ></Box>
<Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  borderRadius={"15px"} height="150px" width="250px"  bg="#CFD8DC" ></Box>
      </Box>
      <Box position={"relative"} left={["30px","30px","30px","30px","30px"]}  display={"flex"} flexDirection={["column","column","row","row","row"]} justifyContent={"space-around"} mt="20px" ml="20px" gap="40px">
    <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" w="100%"  m="0 auto" >
    
            
          <Box height={"400px"}  margin="auto" p={4} boxShadow="md" bg="white">
            <Bar  data={bardata} options={{ maintainAspectRatio: false }} />
          </Box>
      
     
   
    </Box>
   <Box><Box w="100%" >
   <Center > <Pie   data={chardata1} options={{ maintainAspectRatio: false }}/></Center>  

    </Box>
    <Box w="100%" >
   <Center > <Pie   data={chardata1} options={{ maintainAspectRatio: false }}/></Center>  

    </Box>
    <Box w="100%" >
   <Center > <Pie   data={chardata1} options={{ maintainAspectRatio: false }}/></Center>  

    </Box>
    
    
    
    </Box> 
    <Box>
   

    </Box>
    
    </Box>
    <Box height={"800px"}>
      <Center>Hello</Center>
    </Box>
    <Box height={"1000px"}>parjat</Box>
    </Box>
    </>
  );
};
