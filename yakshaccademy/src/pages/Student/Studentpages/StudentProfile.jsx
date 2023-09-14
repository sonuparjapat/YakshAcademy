import { Box, Button, Input, Select, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormControl,FormLabel } from '@chakra-ui/react'
import { createstudentprofile, createstudentprofilefailure, createstudentprofilesuccess } from '../../../Redux/StudentSide/CreateProfile/Action'
import { getstudentprofile } from '../../../Redux/StudentSide/GetProfile/Action'
import { updatestudentprofile, updatestudentprofilefailure, updatestudentupdateprofilesuccess } from '../../../Redux/StudentSide/UpdateProfile/Action'
import { updatestudentprofilefail } from '../../../Redux/StudentSide/UpdateProfile/ActionTypes'
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
const logindata=useSelector((state)=>state.loginreducer)
const [falsyvaue,setFalsyvalue]=useState(false)
const {token}=logindata

const studentprofiledata=useSelector((state)=>state.getstudentprofilereducer)
const {data,isLoading}=studentprofiledata
const dispatch=useDispatch()
// console.log("hi",data,typeof data)
useEffect(()=>{
  dispatch(getstudentprofile(token))
  const {username,useremail,field,unqId,type}=logindata
  if(typeof data=="undefined"||data.length==0){
    setProfiledata((pre)=>({...pre,name:username,type:type,field:field,unqId:unqId,email:useremail}))
  }else{
    setProfiledata((pre)=>({...pre,name:data.name,type:data.type,field:data.field,unqId:data.unqId,email:data.email,gender:data.gender,dob:data.dob,mob:data.mob}))
  }
 
},[])

const handleInputChange=(e)=>{
  const {name,value}=e.target
  setProfiledata((pre)=>({...pre,[name]:value}))
}

// Making requests for profile
const updatedata=useSelector((state)=>state.updatestudentprofilereducer)
const {updateisLoading}=updatedata
// console.log(updateisLoading)
const createdata=useSelector((state)=>state.createstudentprofilereducer)
const {createisLoading}=createdata
const toast=useToast()
const handleSubmit=(e)=>{
  e.preventDefault()
  // console.log(profiledata)
if(typeof data=="undefined"||data.length==0){
dispatch(createstudentprofile(profiledata,token)).then((res)=>{
  toast({description:res.data.msg,status:"success","position":"top",duration:"2000"})
  
  dispatch(createstudentprofilesuccess())
  dispatch(getstudentprofile(token))
}).catch((err)=>{
  if(err.message=="Network Error"){
    toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})

    dispatch(createstudentprofilefailure())
  }else{
    toast({description:err.response.data.msg,status:"error","position":"top",duration:"2000"})
    dispatch(createstudentprofilefailure())
  }

})
}else{
  dispatch(updatestudentprofile(data._id,token,profiledata)).then((res)=>{
    toast({description:res.data.msg,status:"success","position":"top",duration:"2000"})
    dispatch(updatestudentupdateprofilesuccess())
    dispatch(getstudentprofile(token))
 
  
  }).catch((err)=>{
    if(err.message=="Network Error"){
      toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})
  
      dispatch(updatestudentprofilefailure())
    }else{
      toast({description:err.response.data.msg,status:"error","position":"top",duration:"2000"})
      dispatch(updatestudentprofilefailure())
    }
 
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
            value={name}
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
            value={email&&email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            isDisabled
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Student ID</FormLabel>
          <Input
            value={unqId&&unqId}
            name="unqId"
            onChange={handleInputChange}
            type="text"
            placeholder="Student ID"
            isDisabled
          />
        </FormControl>
        <FormControl mt="20px">
          <FormLabel>Field:-</FormLabel>
          <Input
            value={field&&field}
            name="field"
            onChange={handleInputChange}
            type="text"
            placeholder="field"
            isDisabled
          />
        </FormControl>
        <FormControl mt="20px">
          <FormLabel>Type</FormLabel>
          <Input
            value={type&&type}
            name="type"
            onChange={handleInputChange}
            type="text"
            placeholder="Type"
            isDisabled
          />
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>D.O.B</FormLabel>
          <Input
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
            value={mob&&mob}
            name="mob"
            onChange={handleInputChange}
            type="number"
            placeholder="Mobile Number"
          />
        </FormControl>
{data.length==0?
createisLoading?
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
 isDisabled={name&&mob&&email&&gender&&field&&unqId&&type&&dob?false:true}
>
Save
</Button>: updateisLoading? <Button
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
        isDisabled={name&&mob&&email&&gender&&field&&unqId&&type&&dob?false:true}
      >
       Update
      </Button>
}
      
      </Box>
    </form>
  </Box>
  )
}
