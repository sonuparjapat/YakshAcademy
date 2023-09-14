import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getinstructerprofile } from '../../../../Redux/InstructerSide/GetInstructerProfile/Action'
import { instassignments } from '../../../../Redux/InstructerSide/AllAssignments/Action'
import { Box, Text } from '@chakra-ui/react'

import Filterdata from './Filteration'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Pagination, ThemeProvider, createTheme } from '@mui/material'

const defaultTheme =createTheme();
export default function InstructerAssignments() {
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const {token}=logindata
const instassignmentsalldata=useSelector((state)=>state.instassignmentsreducer)
const {isLoading,isError,data}=instassignmentsalldata
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
      
      <Box key={index}>
<Text>{item.name}</Text>
<Text>{item.description}</Text>
        </Box>
      
      
      
      ):<h1>No data found</h1>}
</Box>  
<ThemeProvider theme={defaultTheme}>
<Pagination count={10} color="primary" />
    </ThemeProvider>
      </div>
  )
}
