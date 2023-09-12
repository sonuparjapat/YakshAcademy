import { Box, Button, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const initialdata={
  "name":"",
  "type":"",
  "field":"",
  "unqId":"",
  "dob":"",
  "gender":"",
  "mob":"",
  "email":""


}
export default function StudentProfile() {
const [profiledata,setProfiledata]=useState(initialdata)
const {name,type,field,unqId,dob,gender,mob,email}=profiledata
const data=useSelector((state)=>state.loginreducer)
useEffect(()=>{
  const {username,useremail,field,unqId,type}=data
  setProfiledata((pre)=>({...pre,name:username,type:type,field:field,unqId:unqId,email:useremail}))
},[])

const handlechange=(e)=>{
  const {name,value}=e.target
  setProfiledata((pre)=>({...pre,[name]:value}))
}
const handlesubmit=(e)=>{
  e.preventDefault()
  console.log(profiledata)
}
  return (
    <Box pb="40px" >
      <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>User's Profile</Text>
      <form onSubmit={handlesubmit}>
      <Box w={"80%"} margin={"auto"}>
        <Box display={"flex"} justifyContent={"space-around"}>
<Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>User's Name :-</Text></Box>
<Box w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}><Input onChange={handlechange} value={name} name="name" mt="10px" w="60%"  type="text" placeholder='Name'  /></Box>
  

  
  
  
        </Box>
          {/* email>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Box mt="30px" display={"flex"} justifyContent={"space-around"}>
  <Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>Email Account :-</Text></Box>
<Box  w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}><Input onChange={handlechange} disabled value={email} name="email" mt="10px" w="60%"  type="email" placeholder='Email'  /></Box>
    </Box>

{/* student id............................. */}
<Box mt="30px" display={"flex"} justifyContent={"space-around"}>
  <Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>Student Id :-</Text></Box>
<Box w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}><Input onChange={handlechange} disabled value={unqId} name="unqId" mt="10px" w="60%"  type="text" placeholder='Student Id'  /></Box>
    </Box>



{/* type............................. */}
<Box mt="30px" display={"flex"} justifyContent={"space-around"}>
  <Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>Type :-</Text></Box>
<Box w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}><Input onChange={handlechange} disabled  value={type} name="type" mt="10px" w="60%"  type="text" placeholder='Type'  /></Box>
    </Box>

{/* D.O.B............................. */}
<Box mt="30px" display={"flex"} justifyContent={"space-around"}>
  <Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>D.O.B :-</Text></Box>
<Box w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}><Input onChange={handlechange}  value={dob} name="dob" mt="10px" w="60%"  type="date" placeholder='D.O.B'  /></Box>
    </Box>

{/* Gender............................. */}
<Box mt="30px" display={"flex"} justifyContent={"space-around"}>
  <Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>Gender :-</Text></Box>
<Box w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
  <Select onChange={handlechange}  value="gender" w="60%" name="gender" mt="10px"><option value="">Gender</option><option value="male">Male</option><option value="female">Female</option></Select>
 </Box>
    </Box>
{/* Mob............................. */}
<Box mt="30px" display={"flex"} justifyContent={"space-around"}>
  <Box>  <Text marginTop={"15px"} fontSize={"20px"} textAlign={"center"} fontWeight={600}>MobileNumber :-</Text></Box>
<Box w="80%" bg="white" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}><Input  onChange={handlechange} value={mob} name="mob" mt="10px" w="60%"  type="number" placeholder='Mob'  /></Box>
    </Box>
    <Button bg={"blue.300"} w="40%" type="submit" margin={"auto"} mt="30px"  >SAVE()</Button>
      </Box>

      
      
      </form>
    </Box>
  )
}
