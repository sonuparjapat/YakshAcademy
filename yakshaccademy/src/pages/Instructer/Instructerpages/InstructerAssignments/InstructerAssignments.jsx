import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getinstructerprofile } from '../../../../Redux/InstructerSide/GetInstructerProfile/Action'


export default function InstructerAssignments() {
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const {token}=logindata
  const profiledata=useSelector((state)=>state.getstudentprofilereducer)
  const {data}=profiledata
  
    useEffect(()=>{
  dispatch(getinstructerprofile(token))
    },[])
  return (
    <div>InstructerAssignments</div>
  )
}
