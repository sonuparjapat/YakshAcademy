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
import { createassignment, createassignmentfailure, createassignmentsuccess } from '../../../../Redux/InstructerSide/CreateAssignments/Action';

const initialdata={
  name: '',
  description: '',
  instructername: '',
  deadline:"",
  date:"",
  link: '',
  deadline: '',
  type: '',
}
const CreateAssignment = () => {
  const [assignment, setAssignment] = useState(initialdata)
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
  const {username,type,token}=logindata
  const {isLoading}=useSelector((state)=>state.createassignmentreducer)
  
useEffect(()=>{
setAssignment((pre)=>({...pre,instructername:username,type:type}))
},[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment({
      ...assignment,
      [name]: value,
    });
  };
const toast=useToast()

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission here
    dispatch(createassignment(token,assignment)).then((res)=>{
      toast({description:res.data.msg,status:"success",position:"top",duration:3000})
      // setAssignment(initialdata)
dispatch(createassignmentsuccess())
    }).catch((err)=>{
      if(err.message=="Network Error"){
        toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})
    
     dispatch(createassignmentfailure())
      }else{
        toast({description:err.response.data.msg,status:"error",position:"top",duration:3000})
    
        dispatch(createassignmentfailure()) 
      }
    })

  };

  return (
    <Box maxW="lg" mx="auto" p={4} rounded="lg"  bg="white" mt="100px" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Assignment-Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={assignment.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={assignment.description}
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
              value={assignment.instructername}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl >
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              name="link"
              value={assignment.link}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date Of Creation</FormLabel>
            <Input
              type="date"
              name="date"
              value={assignment.date}
              onChange={handleChange}
            />
           
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Deadline</FormLabel>
            <Input
              type="date"
              name="deadline"
              value={assignment.deadline}
              onChange={handleChange}
            />
           
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Stack</FormLabel>
            <Select
              name="type"
              value={assignment.type}
              onChange={handleChange}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Full Stack</option>
            </Select>
          </FormControl>
{isLoading?
 <Button
 mt={4}
 colorScheme="teal"

 size="lg"
 isFullWidth
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
            isFullWidth
          >
            Create
          </Button>}
          
        </Stack>
      </form>
    </Box>
  );
};

export default CreateAssignment;
