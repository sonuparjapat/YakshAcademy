import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getstudentprofile } from '../../../Redux/StudentSide/GetProfile/Action'
import StudentNavbar from '../studentComponents/Navbar'
import Studentassignments from './AllAssignments/Studentassignments'

export default function Assignments() {

  const dispatch=useDispatch()
const logindata=useSelector((state)=>state.loginreducer)
const {token}=logindata
const profiledata=useSelector((state)=>state.getstudentprofilereducer)
const {data}=profiledata

  useEffect(()=>{
dispatch(getstudentprofile(token))
  },[])

  return (

    <>
  
    
    
   <Studentassignments/></>
  )
}
