import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getinstructerprofile } from '../../../../Redux/InstructerSide/GetInstructerProfile/Action'
import { instassignments } from '../../../../Redux/InstructerSide/AllAssignments/Action'
import { Box, Button, FormControl, FormLabel, Input, Select, Text, Textarea,Stack,AlertDialog, Divider } from '@chakra-ui/react'

import Filterdata from './Filteration'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Pagination, ThemeProvider, createTheme } from '@mui/material'

import DeleteDialog from './DeleteDialoge'
const initialdata={
  "name":"",
  "instructername":"",
  "date":"",
  "deadline":"",
  "type":""
}
const defaultTheme =createTheme();
export default function InstructerAssignments() {
  const [afterdelete,setAfterdelete]=useState(false)

  const [editmodule,setEditModule]=useState(false)
  const [assignment,setAssignment]=useState(initialdata)
 

  const {name,instructername,type,date,deadline}=assignment
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const [deleteassignment,setDeleteAssignment]=useState(false)
  const {token}=logindata
const instassignmentsalldata=useSelector((state)=>state.instassignmentsreducer)
const {isLoading,isError,data,totalcount}=instassignmentsalldata
// console.log(data)
const [searchParams,setSearchParams]=useSearchParams()
const [page,setPage]=useState(searchParams.get("page")||1)

  const location=useLocation()
    useEffect(()=>{
      const obj={
"name":searchParams.get("name")&&searchParams.get("name"),
"date":searchParams.get("date")&&searchParams.get("date"),
"deadline":searchParams.get("deadline")&&searchParams.get("deadline"),
"limit":10,

"page":searchParams.get("page")&&searchParams.get('page')||1
      }
     
  dispatch(getinstructerprofile(token))
  dispatch(instassignments(token,obj))
    },[location.search,afterdelete])
const refresh=()=>{
  setAfterdelete(!afterdelete)
}
// handling edit and deleteing part
const handleedit=(id)=>{
setEditModule(!editmodule)
}
const handledelete=(id)=>{
setDeleteAssignment(!deleteassignment)

}
const handlepagechange=(e,pageno)=>{
  console.log(pageno)
  setPage(pageno)
  let obj={
    page:page
  }
  setSearchParams(obj)
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
      
      <Box w={"80%"} textAlign={"left"} margin="auto"  key={index}>
        <Box display={["block","flex","flex","flex","flex"]} justifyContent={"space-around"} pl="20px" pt="20px" pb="20px">
<Box w={["100%","75%","75%","75%",'75%']} pr="20px"><Text fontWeight={500} >{item.name}</Text>
{/* <Text>{item.description}</Text> */}
<Text>Created By:-<Text color="blue.300" display={"inline"} fontWeight={"bold"}>{item.instructername}</Text> on the date <Text color="blue.300" display={"inline"} fontWeight={"bold"}>{item.date}</Text></Text>
    </Box><Box w={["100%","30%","30%","30%","30%"]} pr="10px" display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} gap="20px">
      
     <Link to={`/editassignment/${item._id}`}> <Button backgroundColor={"green.100"} >Edit</Button></Link>
      <DeleteDialog id={item._id} refresh={refresh}/>
      
      
      
      </Box>    </Box>
      
    
      
      
      <Divider borderColor="gray.300" borderWidth="1px"/>
      
      </Box>
    
      
      
      ):<h1>No data found</h1>}
    
</Box>  
{/* {deleteassignment&&<DeleteDialog/>} */}
      </div>
  )
}
