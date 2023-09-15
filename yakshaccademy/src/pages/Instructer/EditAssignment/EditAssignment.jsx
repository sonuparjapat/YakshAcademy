import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  InputGroup,
  InputRightElement,
  DatePicker,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { getsignleassignmentfailure, getsingleassignment, getsingleassignmentsuccess } from '../../../Redux/InstructerSide/AllAssignments/SingleAssignment/Action';
import { editassignmentfailure, editassignmentsuccess, insteditassignment } from '../../../Redux/InstructerSide/AllAssignments/EditAssignment/Action';


const initialdata={
  name: '',
  description: '',
  instructername: '',
  deadline:"",
  date:"",
  link: '',
  field:"",

  
}
export default function EditAssignment(){
  const [editassignment, setEditAssignment] = useState(initialdata)
  const {name,description,instructername,date,link,deadline,field}=editassignment
  const {id}=useParams()

  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const {username,token}=logindata
  const {editisLoading}=useSelector((state)=>state.editassignmentreducer)
  const singleassignmentdata=useSelector((state)=>state.getsingleassignmentreducer)
 const { data,isLoading}=singleassignmentdata

// console.log(editassignment)
//  console.log(data)

useEffect(()=>{
dispatch(getsingleassignment(token,id)).then((res)=>{
  dispatch(getsingleassignmentsuccess(res.data.msg))
  setEditAssignment(res.data.msg)
}).catch((err)=>{



if(err.message=="Network Error"){
  toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})

dispatch(editassignmentfailure())
}else{
  toast({description:err.response.data.msg,status:"error",position:"top",duration:3000})

  dispatch(editassignmentfailure()) 
}})
},[])

// data&&setEditAssignment((pre)=>({...pre,name:data.name}))
// setEditAssignment((pre)=>({...pre,instructername:username,type:type}))


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditAssignment({
      ...editassignment,
      [name]: value,
    });
  };
const navigate=useNavigate()

const toast=useToast()
// console.log(editassignment)
  const handleSubmit = (e) => {
    // console.log(editassignment)
    // console.log(editassignment)
    e.preventDefault();
    // You can add your logic to handle the form submission here
    dispatch(insteditassignment(token,id,editassignment)).then((res)=>{
      toast({description:res.data.msg,status:"success",position:"top",duration:3000})
      // setAssignment(initialdata)
dispatch(editassignmentsuccess())
navigate("/instructer")
    }).catch((err)=>{
      // console.log(err)
      if(err.message=="Network Error"){
        toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})
    
     dispatch(editassignmentfailure())
      }else{
        toast({description:err.response.data.msg,status:"error",position:"top",duration:3000})
    
        dispatch(editassignmentfailure()) 
      }
    })

  };
if(isLoading){
  return <h1>Loading...</h1>
}
  return (
    <Box maxW="lg" mx="auto" p={4} rounded="lg"  bg="white" mt="100px" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Assignment-Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={description}
              onChange={handleChange}
              size="lg"
              resize="vertical"
              rows={5} // You can adjust the number of rows as needed
              className="chakra-input"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Instructor Name</FormLabel>
            <Input
            disabled
              type="text"
              name="instructername"
              value={instructername}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl >
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              name="link"
              value={link &&link}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date Of Creation</FormLabel>
            <Input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
           
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Deadline</FormLabel>
            <Input
              type="date"
              name="deadline"
              value={deadline}
              onChange={handleChange}
            />
           
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Stack</FormLabel>
            <Select
              name="field"
              value={field}
              onChange={handleChange}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Full Stack</option>
            </Select>
          </FormControl>
{editisLoading?
 <Button
 mt={4}
 colorScheme="teal"

 size="lg"

>
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
    </div>
</Button>:<Button
            mt={4}
            colorScheme="teal"
            type="submit"
            size="lg"
          
          >
            Edit
          </Button>}
          
        </Stack>
      </form>
    </Box>
  );
};


