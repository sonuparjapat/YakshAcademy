import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getinstructerprofile } from '../../../../Redux/InstructerSide/GetInstructerProfile/Action'
import { instassignments } from '../../../../Redux/InstructerSide/AllAssignments/Action'
import { Box, Button, FormControl, FormLabel, Input, Select, Text, Textarea,Stack } from '@chakra-ui/react'

import Filterdata from './Filteration'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Pagination, ThemeProvider, createTheme } from '@mui/material'
const initialdata={
  "name":"",
  "instructername":"",
  "date":"",
  "deadline":"",
  "type":""
}
const defaultTheme =createTheme();
export default function InstructerAssignments() {

  const [editmodule,setEditModule]=useState(false)
  const [assignment,setAssignment]=useState(initialdata)
  const {name,instructername,type,date,deadline}=assignment
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const {token}=logindata
const instassignmentsalldata=useSelector((state)=>state.instassignmentsreducer)
const {isLoading,isError,data,totalcount}=instassignmentsalldata
console.log(data)
const [searchParams]=useSearchParams()

  const location=useLocation()
    useEffect(()=>{
      const obj={
"name":searchParams.get("name")&&searchParams.get("name"),
"date":searchParams.get("date")&&searchParams.get("date"),
"deadline":searchParams.get("deadline")&&searchParams.get("deadline"),
"limit":10,

"page":searchParams.get("page")&&searchParams.get('page')
      }
     
  dispatch(getinstructerprofile(token))
  dispatch(instassignments(token,obj))
    },[location.search])

// handling edit and deleteing part
const handleedit=(id)=>{
setEditModule(!editmodule)
}
const handledelete=(id)=>{

}

const handleSubmit=()=>{

}
const handleChange=()=>{

}

    if(isLoading){
      return (
        <Box>
<div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

   
    <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div></Box>
      ) 
    }
  return (
    <div>
      
      <Text textAlign={"center"} fontSize={"20px"} fontWeight={500} mt="20px">All Created Assignments</Text>
      <Box>
     
      {data!=="undefined"&&data.length>=1?
      data.map((item,index)=>
      
      <Box w={"80%"} textAlign={"left"} margin="auto" shadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} key={index}>
        <Box display={["block","flex","flex","flex","flex"]} justifyContent={"space-around"} pl="20px" pt="20px" pb="20px">
<Box><Text fontWeight={500} >{item.name}</Text>
<Text>{item.description}</Text>
<Text>Created By:-<Text color="blue.300" display={"inline"} fontWeight={"bold"}>{item.instructername}</Text> on the date <Text color="blue.300" display={"inline"} fontWeight={"bold"}>{item.date}</Text></Text>
    </Box><Box pr="10px" display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]}>
      
     <Link to={`/editassignment/${item._id}`}> <Button backgroundColor={"green.100"} >Edit</Button></Link>
      <Button  backgroundColor={"red.100"}  onClick={()=>handledelete(item._id)}>Delete</Button>
      
      
      
      </Box>    </Box>
      
    
      
      
      
      
      </Box>
    
      
      
      ):<h1>No data found</h1>}
    
</Box>  
<Box  w="80%" margin="auto" mt="20px" pb="40px" display={"flex"} justifyContent={"right"} alignItems={"right"}>
<ThemeProvider theme={defaultTheme}>
<Pagination count={totalcount&&totalcount} color="primary" />
    </ThemeProvider></Box>
      </div>
  )
}
