import React, { useState } from 'react'
import { Text,Button,Box,Input,Divider, Textarea, Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
const initialdata={
  message:"",
  title:"",
  InstId:"",
  field:"",
  type:"",
  instructername:"",
  instructeremail:""
  
}
export default function InstructerCreateMessg() {

  const [selectvalue,setSelectvalue]=useState(false)
const logindata=useSelector((state)=>state.loginreducer)
const {token,field,type, unqId,username,useremail}=logindata
  const handleselect=(e)=>{
if(e.target.value=="singlestudent"){
  setSelectvalue(true)
}else{
  setSelectvalue(false)
}
  }
  return (
   <>
    <Box >
      <Text fontWeight={600} fontSize={"20px"} pt="30px" textAlign={["center","center","left","left","left"]} pl={["0rem","0rem","6rem","6rem","6rem"]}>Give Any Message</Text>
      <Divider border="1px solid gray"/>
      </Box>
<Box w="80%" margin="auto" bg="white" pb="50px">
    <Box w="80%" margin="auto">
        {/* <Input  mt="20px" placeholder='Enter Name'/> */}
        <Input mt="10px" placeholder="Message Title"></Input>
        <Textarea  mt="10px" placeholder="Description"/>
        <Select mt="10px"  onChange={handleselect}>
          <option value="">Target</option>
          <option value="everystudents">To All Students</option>
          <option value="singlestudent">Particular Student</option>
          <option value="team">Management Team</option>
        </Select>
<Input mt="10px" hidden={selectvalue?false:true} placeholder="StudentId"/>
<Input mt="10px" disabled placeholder='Instructername'/>
<Input mt="10px" disabled placeholder='InstructerId' />
<Input mt="10px" disabled placeholder='Instructeremail'/>
<Box w="40%" margin="auto"><Button width="100%" bg="blue.400" color="white" mt="30px">Submit</Button></Box>
    </Box>

</Box>
   </>

  )
}
