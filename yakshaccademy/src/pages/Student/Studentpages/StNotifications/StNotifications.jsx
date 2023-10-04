import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getnotifications } from '../../../../Redux/StudentSide/NotificationReducer/Action'
import { io } from 'socket.io-client'
import { mainapi } from '../../../../Redux/Api/mainapi'
import { Box, Button, Center, Divider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const socket=io(`${mainapi}`)
export default function StNotifications() {
const dispatch=useDispatch()
const notificationdata=useSelector((state)=>state.getnotificationsreducer)
const {notdata,notisLoading,notisError}=notificationdata
const logindata=useSelector((state)=>state.loginreducer)
const [forany,setForany]=useState(false)
const [data,setData]=useState(null)
// console.log(data)
// console.log(data)

const {token}=logindata
console.log(notdata)

    useEffect(()=>{
      dispatch(getnotifications(token))
      
socket.on("new-assignment",(notidata)=>{
  console.log(notidata.assignment)
  setData(notidata.assignment)
  dispatch(getnotifications(token))
setForany(!forany)

})
return ()=>{
  socket.close()
}
    },[dispatch])

    if(notisLoading){
      return (
        <Center height={"100vh"}><h3>Loading....</h3></Center>
      )
    }else if(notisError){
      return (
        <Center height={"100vh"}><h3>Something going wrong...please check!</h3></Center>
      )
    }
  return (
    <>
    <Box >
      <Text fontWeight={600} fontSize={"20px"} pt="30px" textAlign={["center","center","left","left","left"]} pl={["0rem","0rem","6rem","6rem","6rem"]}>Notifications</Text>
      </Box>
      <Divider border="1px solid gray"/>
      <Box w="80%" margin="auto" bg="white">
{notdata!=="undefined"&&notdata.length>=1?notdata.map((item,index)=>{
  return (
    <Box pb="20px" w={"80%"} textAlign={"left"} margin="auto" mt="30px"  key={index}>
    <Link to={`/notificationdetails/${item._id}`}>    <Box display={["block","flex","flex","flex","flex"]} justifyContent={"space-around"} pl="20px" pt="20px" pb="20px">
<Box w={["100%","75%","75%","75%",'75%']} pr="20px"> <Link to={`/details/${item._id}`}>
 <Text color="blue.200" fontWeight={500} >{item.instructer.name}-<Text display={"inline"} color="black" bg="blackAlpha.300">{item.field&&item.instructer.field}</Text></Text></Link>
{/* <Text>{item.description}</Text> */}
<Text><Text  display={"inline"} fontWeight={"bold"}>{item.instructer.instructername}</Text> created Assignment Problem's at <Text  display={"inline"} fontWeight={"bold"}>{item.instructer.date}</Text></Text>
   </Box><Box  w={["100%","30%","30%","30%","30%"]}  pr="10px" display={["none","flex",'flex',"flex","flex"]} justifyContent={"center"} alignItems={"center"}>
     
    <Link to={`/notificationdetails/${item._id}`}> <Button  mt={["10px","30px","30px","30px","30px"]} backgroundColor={"green.100"} >Details</Button></Link>
   
     
     
     
     </Box>   </Box></Link> 
     
   
     
     
     <Divider borderColor="gray.300" borderWidth="1px"/>
     
     </Box>
  )
}):<Center height={"100vh"}><h3>No Notifications!!</h3></Center>}


      </Box>
      
      
      </>
  )
}
