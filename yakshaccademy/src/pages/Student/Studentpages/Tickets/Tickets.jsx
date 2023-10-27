import { Box ,Text,Button,Input,Select,FormLabel,InputGroup, Divider} from '@chakra-ui/react'
import React, { useState } from 'react'
import AllTickets from './AllTickets'
import CreateTickets from './CreateTickets'

export default function Tickets() {
    const [change,setChange]=useState(false)
  return (
    <>
    <Box p={8} bg="pink.100">
        <Text textAlign={"left"} fontSize={["12px","14px","15px","20px","20px"]}  fontWeight={600} pl="6">Tickets</Text>
    </Box>
    <Divider border={"1px solid gray"}/>
    
    <Box bg="blue.100" p="8" display={"flex"} justifyContent={"space-around"} w="90%" margin="auto">
        <Button onClick={()=>setChange(true)}>Create Ticket</Button> 
        <Button onClick={()=>setChange(false)}>All Tickets</Button> </Box>
        {!change&&<AllTickets/>}
        {change&&<CreateTickets/>}
    </>
  )
}
