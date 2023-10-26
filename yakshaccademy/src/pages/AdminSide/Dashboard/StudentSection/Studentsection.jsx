import React, { useEffect, useState } from 'react'
import { Box,Button,Center,Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getadminstudents } from '../../../../Redux/Admin/GETStudents/ACtion'
import Filters from './Filters'
import styles from "./Filters.module.css"
export default function Studentsection() {
    const [purpose,setPurpouse]=useState(false)
    const [filtercompo,setFiltercompo]=useState(false)
    const dispatch=useDispatch()

    const adminstudentdata=useSelector((state)=>state.getadminstudentsreducer)
    const {studentsisLoading,studentsisError,studentdata}=adminstudentdata
    const adminalldata=useSelector((state)=>state.adminloginreducer)
    const {admintoken}=adminalldata

    useEffect(()=>{
        dispatch(getadminstudents(admintoken))
        
    },[])
    // console.log(studentdata,"hi")
  return (
    <>
    <Box mt="20px"><Center ><Heading color="green.300" fontSize={["15px","15px","17px","19px","20px"]}>~~StudentManagement~~</Heading></Center></Box>
<Box bg="green.300" p={"30px"}>
    <Box display={"flex"} justifyContent={"space-evenly"}>

        <Button onClick={()=>setPurpouse(false)} color="white" bg="blue.300" py={3} px={3}>ADD Student/Instructer</Button>
        <Button onClick={()=>setFiltercompo(!filtercompo)} color="white" bg="blue.300" py={3} px={3}>Filters</Button>
        <Button onClick={()=>setPurpouse(true)} color="white" bg="blue.300" py={3} px={3}>All Students</Button>
        {/* <Button color="white" bg="blue.300" py={3} px={3}>All Instucters</Button>
        <Button color="white" bg="blue.300" py={3} px={3}>ADD Student/Instructer</Button> */}
    </Box>
</Box>
{filtercompo&&
<div className={`${styles.animated} ${styles.fadeIn}`}>
<Filters/></div>}
<Box>


</Box>
    
    
    
    </>
  )
}
