import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box,Input } from '@chakra-ui/react'
import Studentassignments from './Studentassignments'
import { Pagination } from '@mui/material'
import {ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material'
import { useSelector } from 'react-redux'
import { getstudentassignment } from '../../../../Redux/StudentSide/StudentAssignments/GetStudentAssignment/Action'
import { useDebounce } from '../Debounce'
// import { create } from '@mui/material/styles/createTransitions'

const defaultTheme=createTheme()

export default function Stduentassignfilter() {
    const [searchParams,setSearchParams]=useSearchParams()
    const [name,setName]=useState(searchParams.get("name")||"")
    const [date,setDate]=useState(searchParams.get("date")||"")
    const [deadline,setDeadline]=useState(searchParams.get("deadline")||"")
    const stuentassignmentdata=useSelector((state)=>state.getstudentassignmentreducer)
    const {totalcount}=stuentassignmentdata

    const [page,setPage]=useState(searchParams.get("page")||1)
 
    const handlechange=(e)=>{
debounce(e.target.value)
    }
    const handlesearch=(e)=>{
setName(e)
    }
useEffect(()=>{
const params={}
page&&(params.page=page)
name&&(params.name=name)
date&&(params.date=date)
deadline&&(params.deadline=deadline)

setSearchParams(params)
},[name,date,deadline,page])
    const debounce=useDebounce(handlesearch,500)
    return (


    <>
    <Box  bg="white" pt="100px" pd="100px" w="80%" margin={"auto"} mt="100px" >
      <Box pb="50px" pr="20px" pl="20px" display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]}  gap="10px"> <Box><label>Search By name</label>
        <Input type="text" placeholder='Search By assignmentname'   onChange={handlechange} /></Box>
       <Box> <label>Search By date</label>
<Input type="date" name="date" onChange={(e)=>setDate(e.target.value)}/></Box>
<Box><label>Search By deadline</label>

<Input type="date" name="deadline" onChange={(e)=>setDeadline(e.target.value)}/></Box>
    </Box></Box> 
       <Studentassignments/>
     
    {totalcount!=="undefined"&&totalcount>=2&&
       <Box  w="80%" margin="auto" mt="20px" pb="40px" display={"flex"} justifyContent={"right"} alignItems={"right"}>
       <ThemeProvider theme={defaultTheme}>
       <Pagination count={totalcount&&totalcount} page={page} onChange={(e,pageno)=>setPage(pageno)} color="primary" />
    </ThemeProvider></Box>
    } 
    </>    )
}
