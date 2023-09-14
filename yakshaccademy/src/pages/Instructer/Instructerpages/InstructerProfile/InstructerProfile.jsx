import { Box, Button, Input, Select, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormControl,FormLabel } from '@chakra-ui/react'




import { getinstructerprofile } from '../../../../Redux/InstructerSide/GetInstructerProfile/Action'
import { createinstructerprofilefailure, createinstructerprofilesuccess, createinstruterprofile } from '../../../../Redux/InstructerSide/CreateInstructerProfile/Action'
import { updateinstprofile, updateinstprofilefailure, updateinstprofilesuccess } from '../../../../Redux/InstructerSide/UpdateInstructerProfile/Action'
const initialdata={
  "name":"",
  "type":"",
  "department":"",
  "unqId":"",
  "dob":"",
  "gender":"",
  "mob":"",
  "email":""


}
export default function InstructerProfile() {
const [profiledata,setProfiledata]=useState(initialdata)
const {name,type,department,unqId,dob,gender,mob,email}=profiledata
const logindata=useSelector((state)=>state.loginreducer)
const [falsyvaue,setFalsyvalue]=useState(false)
const {token}=logindata

const instructerprofiledata=useSelector((state)=>state.getinstprofilereducer)
const {data,isLoading}=instructerprofiledata
const dispatch=useDispatch()
// console.log("hi",data,typeof data)
useEffect(()=>{
  dispatch(getinstructerprofile(token))
  const {username,useremail,field,unqId,type}=logindata
  if(typeof data=="undefined"||data.length==0){
    setProfiledata((pre)=>({...pre,name:username,type:type,department:field,unqId:unqId,email:useremail}))
  }else{
    setProfiledata((pre)=>({...pre,name:data.name,type:data.type,department:data.department,unqId:data.unqId,email:data.email,gender:data.gender,dob:data.dob,mob:data.mob}))
  }
 
},[])

const handleInputChange=(e)=>{
  const {name,value}=e.target
  setProfiledata((pre)=>({...pre,[name]:value}))
}

// Making requests for profile
const updatedata=useSelector((state)=>state.updateinstprofilereducer)
const {updateinstisLoading}=updatedata
const createdata=useSelector((state)=>state.createinstprofilereducer)
const {instisLoading}=createdata
const toast=useToast()
const handleSubmit=(e)=>{
  e.preventDefault()
//   console.log(profiledata)
if(typeof data=="undefined"||data.length==0){
dispatch(createinstruterprofile(profiledata,token)).then((res)=>{
  toast({description:res.data.msg,status:"success","position":"top",duration:"2000"})
  
  dispatch(createinstructerprofilesuccess())
  dispatch(getinstructerprofile(token))
}).catch((err)=>{
  toast({description:err.response.data.msg,status:"error","position":"top",duration:"2000"})
  dispatch(createinstructerprofilefailure())
})
}else{
  dispatch(updateinstprofile(data._id,token,profiledata)).then((res)=>{
    toast({description:res.data.msg,status:"success","position":"top",duration:"2000"})
    dispatch(updateinstprofilesuccess())
    dispatch(getinstructerprofile(token))
 
  
  }).catch((err)=>{
   
    toast({description:err.response.data.msg,status:"error","position":"top",duration:"2000"})
    dispatch(updateinstprofilefailure())
  })
}
  // console.log(profiledata)
}
if(isLoading){
  return <h1>Loading....</h1>
}
  return (
    <Box p="40px">
    <Text fontSize="20px" textAlign="center" fontWeight={600} mb="15px">
      User's Profile
    </Text>
    <form onSubmit={handleSubmit}>
      <Box w="80%" margin="auto">
        <FormControl>
          <FormLabel>User's Name</FormLabel>
          <Input
               boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
bg="white"
            value={name&&name}
            name="name"
            disabled
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Email Account</FormLabel>
          <Input
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={email&&email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            isDisabled
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Instructer ID</FormLabel>
          <Input
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={unqId&&unqId}
            name="unqId"
            onChange={handleInputChange}
            type="text"
            placeholder="Instructer ID"
            isDisabled
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Type</FormLabel>
          <Input
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={type&&type}
            name="type"
            onChange={handleInputChange}
            type="text"
            placeholder="Type"
            isDisabled
          />
        </FormControl>
        <FormControl mt="20px">
          <FormLabel>Department:-</FormLabel>
          <Input
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={department&&department}
            name="department"
            onChange={handleInputChange}
            type="text"
            placeholder="Department"
            isDisabled
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>D.O.B</FormLabel>
          <Input
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={dob&&dob}
            name="dob"
            onChange={handleInputChange}
            type="date"
            placeholder="D.O.B"
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Gender</FormLabel>
          <Select
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={gender&&gender}
            name="gender"
            onChange={handleInputChange}
            placeholder="Gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Mobile Number</FormLabel>
          <Input
             boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
             bg="white"
            value={mob&&mob}
            name="mob"
            onChange={handleInputChange}
            type="number"
            placeholder="Mobile Number"
          />
        </FormControl>
{data.length==0?
instisLoading?
 <Button
 bg="blue.300"
 w="40%"

 margin="auto"
 mt="30px"
 color="white"
>
Loading...
</Button>: <Button
 bg="blue.300"
 w="40%"
 type="submit"
 margin="auto"
 mt="30px"
 color="white"
 isDisabled={name&&mob&&email&&gender&&department&&unqId&&type&&dob?false:true}
>
Save
</Button>: updateinstisLoading? <Button
          bg="blue.300"
          w="40%"
      
          margin="auto"
          mt="30px"
          color="white"
        >
    Loading...
        </Button>:
        <Button
        bg="blue.300"
        w="40%"
        type="submit"
        margin="auto"
        mt="30px"
        color="white"
        isDisabled={name&&mob&&email&&gender&&department&&unqId&&type&&dob?false:true}
      >
       Update
      </Button>
}
      
      </Box>
    </form>
  </Box>
  )
}
