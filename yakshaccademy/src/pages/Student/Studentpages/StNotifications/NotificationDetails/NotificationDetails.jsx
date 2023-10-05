import React, { useEffect } from 'react'
import { Divider,Box,Text, Center,Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getsinglenoti } from '../../../../../Redux/StudentSide/NotificationReducer/GetSignleNotification/Actions'
export default function NotificationDetails() {
  const {id}=useParams()
  const notinoti=useSelector((state)=>state.getsinglenotireducer)
  const {notisLoading,notisError,noti}=notinoti
  // console.log(noti)
  const loginnoti=useSelector((state)=>state.loginreducer)
  const {token}=loginnoti
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getsinglenoti(token,id))
  },[])
  // console.log(id)

  if(notisLoading){
    return (
      <Center height="100vh"><h3>Loading...</h3></Center>
    )
  }else if(notisError){
    return (
      <Center height="100vh"><h3>Something going wrong..please check!!</h3></Center>
    )
  }
  return (
    <>
    {typeof noti!=="undefined"&&notisLoading==false&&
    <Box>
     <Box textAlign={"left"} >
 <Text pl={["50px","50px","100px","100px","100px"]} pt="50px"  fontSize={["15px","15px","20px","20px","20px"]} fontWeight={600} fontStyle={"bold"}>{noti.instructer&&noti.instructer.name&&noti.instructer.name}-<Text display={"inline"} bg="yellow.200">{noti.field&&noti.field}</Text>
 </Text>
 <Text pl={["50px","50px","100px","100px","100px"]}  fontSize={["13px","13px","14px","15px","16px"]} fontWeight={600} color={"gray.500"} fontStyle={"bold"}>{`${noti.instructer&&noti.instructer.instructername&&noti.instructer.instructername}`} {`(${noti.instructer&&noti.instructer.date&&noti.instructer.date}) To (${noti.instructer&&noti.instructer.deadline&&noti.instructer.deadline})`}</Text>
 
     </Box>
     <Divider></Divider>
     
     <Box w="80%" margin="auto" mt="100px" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
 
 <Text color="blue.200" textAlign={"center"}>Details</Text>
 <Divider></Divider>
 <Heading>Instructions</Heading>
 
 <Box w="90%" margin="auto" pt="40px" pb="30px">
 <Text textAlign={"left"} fontWeight={300} fontSize={["12px","15px","15px","15px","17px"]}>{noti.instructer&&noti.instructer.description&&noti.instructer.description}</Text>
 <Link fontStyle={"light"} fontSize={["10px","12px","15px","20px","20px"]} to={noti.instructer&&noti.instructer.link&&noti.instructer.link} target="_blank">{noti.instructer&&noti.instructer.link&&noti.instructer.link}</Link>

 </Box>
 
 <Box pb="50px"><Link to="/student"><Button bg="blue.300">Go To Assignments</Button></Link></Box>
 
     </Box>
     
     
     
     </Box>
    }
   
    </>
  )
}
