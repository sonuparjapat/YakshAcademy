import { Box, Input, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import InstructerAssignments from './InstructerAssignments'
import { useDebounce } from '../../../Student/Studentpages/Debounce'
import { Pagination, ThemeProvider, createTheme } from '@mui/material'
import { useSelector } from 'react-redux'
const defaultTheme =createTheme();
export default function Filterdata() {
    const [searchParams,setSearchParams]=useSearchParams()
    const [page,setPage]=useState(searchParams.get("page")||1)
    const [date,setDate]=useState("")
    const [deadline,setDeadline]=useState("")
    const [name,setName]=useState("")
    const assignmentdata=useSelector((state)=>state.instassignmentsreducer)
    const {totalcount}=assignmentdata
  
const handlechange=(e)=>{
    
    debounce(e.target.value)
}
const handlesearch=(e)=>{
    setName(e)
}
const debounce=useDebounce(handlesearch,500)
useEffect(()=>{
    const params={}
    name&&(params.name=name)
    date&&(params.date=date)
    page&&(params.page=page)
  
    deadline&&(params.deadline=deadline)
    
    setSearchParams(params)

},[name,date,deadline,page])
  return (
    <>
    <Box  bg="white" pt="100px" pd="100px" w="80%" margin={"auto"} mt="100px" >
      <Box pb="50px" pr="20px" pl="20px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]}  gap="10px"> <Box><label>Search By name</label>
        <Input type="text" placeholder='Search By assignmentname'   onChange={handlechange} /></Box>
       <Box> <label>Search By date</label>
<Input type="date" name="date" onChange={(e)=>setDate(e.target.value)}/></Box>
<Box><label>Search By deadline</label>

<Input type="date" name="deadline" onChange={(e)=>setDate(e.target.value)}/></Box>
    </Box></Box> 
        <InstructerAssignments/>
        <Box  w="80%" margin="auto" mt="20px" pb="40px" display={"flex"} justifyContent={"right"} alignItems={"right"}>
<ThemeProvider theme={defaultTheme}>
<Pagination count={totalcount&&totalcount} page={page} onChange={(e,pageno)=>setPage(pageno)} color="primary" />
    </ThemeProvider></Box>
    </>
  )
}
