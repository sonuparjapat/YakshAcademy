import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { studentsignleassignmentsuccess, studentsingleassignment, studentsingleassinfailure } from '../../../../Redux/StudentSide/StudentAssignments/GetSingleAssignment/Action'
import { Box, Divider, Heading, Input, Link, Text,Button, useToast } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { submitstdassignfailure, submitstdassignsuccess, submitstudentassignment } from '../../../../Redux/StudentSide/StudentAssignments/SubmitAssignment/Action'
import { getsubassignfailure, getsubmittedassignment, getsubmittedassignmentsuccess } from '../../../../Redux/StudentSide/StudentAssignments/getSubmitedassign/Action'
import { completeassignfailure, completeassignment, completeassigsuccess } from '../../../../Redux/StudentSide/StudentAssignments/CompleteAssignment/Action'
import io from 'socket.io-client';
import { mainapi } from '../../../../Redux/Api/mainapi'
const socket=io(`${mainapi}`)
const initialdata={
    link:"",
studentname:"",
    field:"",
    instId:"",
    assignmentId:"",
    assignmentname:"",
    studentname:"",
    type:"", 
    instructername:""
}

export default function StudentSingleAssignment() {
    const [newassignment,setNewAssignment]=useState(null)
    const [completionstatus,setCompletionstatus]=useState("")
    const [inputvalue,setInputvalue]=useState("")
    const [submitvalue,setSubmitvalue]=useState(false)
    const [submissiondata,setSubmissiondata]=useState(initialdata)
    const [handlererender,setHandlererender]=useState(false)
    const {id}=useParams()
    const dispatch=useDispatch()
    const assignmentdata=useSelector((state)=>state.studentsingleassignmentreducer)
    const logindata=useSelector((state)=>state.loginreducer)
    const {token,type,username}=logindata
    const {singleisLoading,data}=assignmentdata
    const submitdata=useSelector((state)=>state.submitstudentassignmentreducer)
    const {submitisLoading}=submitdata
 const {completeisLoading,msg}=useSelector((state)=>state.completeassignmentreducer)

 const [statusmsg,setStatusmsg]=useState("")

 

    useEffect(()=>{
        dispatch(studentsingleassignment(token,id)).then((res)=>{

            setSubmissiondata((pre)=> ({...pre,studentname:username,field:res.data.msg.field,instId:res.data.msg.userId,assignmentId:res.data.msg._id,assignmentname:res.data.msg.name,
                type:type,instructername:res.data.msg.instructername}))
            dispatch(studentsignleassignmentsuccess(res.data.msg))
        }).catch((err)=>{

            dispatch(studentsingleassinfailure())
        })
       
    dispatch(getsubmittedassignment(token,id)).then((res)=>{
        dispatch(getsubmittedassignmentsuccess(res.data.msg))
    //  console.log(res)
setCompletionstatus(res.data.msg)
    }).catch((err)=>{
        dispatch(getsubassignfailure())
        console.log(err)
    })
    // handling realtime connection????????????????????????????????????????????????????????????????????????????????????????
    socket.on('connect', () => {
        console.log('WebSocket connected');
      });
    socket.on('new-assignment', (data) => {
        setNewAssignment(data.assignment);
      });
    },[handlererender])
// console.log(completionstatus)
    const handlechange=(e)=>{
        setInputvalue(e.target.value)
        setSubmissiondata((pre)=>({...pre,link:e.target.value}))   
    }
    const toast=useToast()

console.log(newassignment)
    // Making request to submitassignment
    const handlesubmit=()=>{
setSubmitvalue(!submitvalue)


const {link}=submissiondata
if(!link){
toast({description:"Please provide the Assignemt link","status":"error","position":"top",duration:2000})
}else{
dispatch(submitstudentassignment(token,submissiondata)).then((res)=>{
    toast({description:res.data.msg,"status":"success","position":"top",duration:4000})
    dispatch(submitstdassignsuccess())
    setHandlererender(!handlererender)
    
}).catch((err)=>{
    if(err.message=="Network Error"){
        toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})
    
        dispatch(submitstdassignfailure())
      }else{
        toast({description:err.response.data.msg,status:"error","position":"top",duration:"2000"})
        dispatch(submitstdassignfailure())
      }
})
// console.log(submissiondata)
    }}
   
    // completeionstatus request
   const completestatus=(id)=>{
// console.log(id)
dispatch(completeassignment(token,id)).then((res)=>{
    // console.log(res)
    toast({description:res.data.msg,status:"success","position":"top",duration:2000})
    dispatch(completeassigsuccess(res.data.msg))
    setHandlererender(!handlererender)
}).catch((err)=>{
    if(err.message=="Network Error"){
        toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})
    
        dispatch(completeassignfailure())
      }else{
        toast({description:err.response.data.msg,status:"error","position":"top",duration:"2000"})
        dispatch(completeassignfailure())
      } 
})

   }



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

<Box w="90%" margin="auto" pt="40px" pb="30px">
<Text textAlign={"left"} fontWeight={300} fontSize={["12px","15px","15px","15px","17px"]}>{data.description&&data.description}</Text>
<Link fontStyle={"light"} fontSize={["10px","12px","15px","20px","20px"]} href={data.link} target="_blank">{data.link&&data.link}</Link>
<Box w={["100%","80%","80%","80%","80%"]} margin="auto"  mt="50px" display={["block","block","flex","flex","flex"]} justifyContent={"space-evenly"}><Input display={["block","block","flex","flex","flex"]} w={["100%","100%","60%","60%","60%"]}  border="1px solid gray"   onChange={handlechange} placeholder="put your assignment link here" />
{submitisLoading?
    <Button gap="10px" backgroundColor={"blue.200"} mt={["15px","15px","0px","0px",
"0px","0px"]} isDisabled={!inputvalue?true:false}  >Loading...</Button>:
<Button gap="10px" backgroundColor={"blue.200"} mt={["15px","15px","0px","0px",
"0px","0px"]} isDisabled={!inputvalue?true:false}  onClick={handlesubmit}>Submit</Button>
}



</Box>
<Text mt="10px">Please after submition click here to complete assignment <ArrowDownIcon/></Text>
{completeisLoading?
    <Button mt="10px"  backgroundColor={"green.200"}  isDisabled={!(inputvalue !== "" && submitvalue)}>Loading...</Button>:
    <Button mt="10px" onClick={()=>completestatus(id)} backgroundColor={"green.200"} isDisabled={completionstatus==false?false:true} >{completionstatus?"Completed":"NotCompleted"}</Button>}
   <Box w="40%" margin="auto"> <Text bg="yellow.200" mt="20px" >{msg}</Text></Box>
</Box>


    </Box>
    
    
    
    </Box>
   }
  
   </>

  )
}
