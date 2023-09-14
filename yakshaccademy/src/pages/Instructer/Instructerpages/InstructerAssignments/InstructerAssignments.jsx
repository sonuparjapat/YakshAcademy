import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getinstructerprofile } from '../../../../Redux/InstructerSide/GetInstructerProfile/Action'
import { instassignments } from '../../../../Redux/InstructerSide/AllAssignments/Action'
import { Box } from '@chakra-ui/react'


export default function InstructerAssignments() {
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const {token}=logindata
const instassignmentsalldata=useSelector((state)=>state.instassignmentsreducer)
const {isLoading,isError,data}=instassignmentsalldata
console.log(data)

  
    useEffect(()=>{
  dispatch(getinstructerprofile(token))
  dispatch(instassignments(token))
    },[])

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
    <div>InstructerAssignments</div>
  )
}
