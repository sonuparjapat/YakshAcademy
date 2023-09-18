import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getstudentassignment } from '../../../../Redux/StudentSide/StudentAssignments/GetStudentAssignment/Action'
import { Box,Text,Button } from '@chakra-ui/react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getstudentprofile } from '../../../../Redux/StudentSide/GetProfile/Action'
export default function Studentassignments() {

    const dispatch=useDispatch()
    const logindata=useSelector((state)=>state.loginreducer)

const [data,setData]=useState([])

    // console.log(assignments)
    // console.log(assignments)
    const [searchParams]=useSearchParams()
    const assignmentdata=useSelector((state)=>state.getstudentassignmentreducer)
    const {assignments,getisLoading,getisError}=assignmentdata

    // console.log(assignments,"assignment",getisLoading,getisError)
    const {token}=logindata
    const location=useLocation()
    useEffect(()=>{
      const obj={}
searchParams.get("page")?(obj.page=searchParams.get("page")):(obj.page=1)
searchParams.get("name")&&(obj.name=searchParams.get("name"))
searchParams.get("date")&&(obj.date=searchParams.get("date"))
searchParams.get("deadline")&&(obj.deadline=searchParams.get("deadline"))
obj.limit=10
        dispatch(getstudentprofile(token))
      dispatch(getstudentassignment(token,obj))
        
      
          },[location.search])


    if(getisLoading){
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
        
        <Text textAlign={"center"} fontSize={"20px"} fontWeight={500} mt="20px">All Assignments</Text>
        <Box>
       
        {typeof assignments!=="undefined" &&assignments.length>=1?
        assignments.map((item,index)=>
        
        <Box w={"80%"} textAlign={"left"} margin="auto" mt="30px" shadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} key={index}>
       <Link to={`/details/${item._id}`}>    <Box display={["block","flex","flex","flex","flex"]} justifyContent={"space-around"} pl="20px" pt="20px" pb="20px">
 <Box w={["100%","75%","75%","75%",'75%']} pr="20px"> <Link to={`/details/${item._id}`}>
    <Text color="blue.200" fontWeight={500} >{item.name}-<Text display={"inline"} color="black" bg="blackAlpha.300">{item.field&&item.field}</Text></Text></Link>
  {/* <Text>{item.description}</Text> */}
  <Text><Text  display={"inline"} fontWeight={"bold"}>{item.instructername}</Text> created Assignment Problem's at <Text  display={"inline"} fontWeight={"bold"}>{item.date}</Text></Text>
      </Box><Box  w={["100%","30%","30%","30%","30%"]}  pr="10px" display={["none","flex",'flex',"flex","flex"]} justifyContent={"center"} alignItems={"center"}>
        
       <Link to={`/details/${item._id}`}> <Button  mt={["10px","30px","30px","30px","30px"]} backgroundColor={"green.100"} >Details</Button></Link>
      
        
        
        
        </Box>   </Box></Link> 
        
      
        
        
        
        
        </Box>
      
        
        
        ):<h1>No data found</h1>}
      
  </Box>  </div>
  )
}
