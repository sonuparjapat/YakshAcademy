import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { studentsingleassignment } from '../../../../Redux/StudentSide/StudentAssignments/GetSingleAssignment/Action'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'

export default function StudentSingleAssignment() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const assignmentdata=useSelector((state)=>state.studentsingleassignmentreducer)
    const logindata=useSelector((state)=>state.loginreducer)
    const {token}=logindata
    const {singleisLoading,data}=assignmentdata
    console.log(data,singleisLoading)

    useEffect(()=>{
        dispatch(studentsingleassignment(token,id))
    },[])
    if(singleisLoading){
        return <Heading mt="10px">Loading....</Heading>
    }
  return (
   <>
   {typeof data!=="undefined"&&
   <Box>
    <Box textAlign={"left"} >
<Text pl={["50px","50px","100px","100px","100px"]} pt="50px"  fontSize={["15px","15px","20px","20px","20px"]} fontWeight={600} fontStyle={"bold"}>{data.name&&data.name}-<Text display={"inline"} bg="yellow.200">{data.field&&data.field}</Text>
</Text>
<Text pl={["50px","50px","100px","100px","100px"]}  fontSize={["13px","13px","14px","15px","16px"]} fontWeight={600} color={"gray.500"} fontStyle={"bold"}>{`${data.instructername&&data.instructername}`} {`(${data.date&&data.date}) To (${data.deadline&&data.deadline})`}</Text>

    </Box>
    <Divider></Divider>
    
    <Box w="80%" margin="auto" mt="100px" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>

<Text color="blue.200" textAlign={"center"}>Details</Text>
<Divider></Divider>
<Heading>Instructions</Heading>

<Box w="60%" margin="auto" pt="40px" pb="30px">
<Text textAlign={"left"} fontWeight={300} fontSize={"25px"}>{data.description&&data.description}</Text>
</Box>


    </Box>
    
    
    
    </Box>
   }
  
   </>

  )
}
