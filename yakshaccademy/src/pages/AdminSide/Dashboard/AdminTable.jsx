import React, { useEffect, useState } from 'react'
import { Tfoot,Td,Tr,Th,TableContainer,Thead,Tbody,Table,TableCaption, Center, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function AdminTable() {
    const adminalldata=useSelector((state)=>state.adminloginreducer)
const [admindata,setAdmindata]=useState([])

    const { studentscount,
      alldata,
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
      admins,
      fullstackinstructers }=adminalldata
      useEffect(()=>{
setAdmindata(admins)
      },[])
    //   console.log(admindata)
  return (
    <>
    <TableContainer boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" w="100%"  >
  <Table variant='simple ' w="100%">
    <TableCaption><Center>All Registered Admins</Center></TableCaption>
    <Thead>
      <Tr>
        <Th>Sr.</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>UniqeId</Th>
        {/* <Th>Email</Th> */}
      </Tr>
    </Thead>
    {admindata!=="undefined"&&admindata.length>=1?
    
admindata.map((admin,index)=>{
    return (
<Tbody>
      <Tr>
        <Td>{index+1}</Td>
        <Td>{admin.name}</Td>
        <Td >{admin.email}</Td>
        <Td>{admin.Id}</Td>
      </Tr>
    
    </Tbody>
    )
}):
<Text>No Registered Admins</Text>}
    
  
  </Table>
</TableContainer>
    
    
    </>
  )
}
