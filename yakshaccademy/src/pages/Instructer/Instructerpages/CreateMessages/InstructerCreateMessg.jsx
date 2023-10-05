import React from 'react'
import { Text,Button,Box,Input,Divider, Textarea } from '@chakra-ui/react'
export default function InstructerCreateMessg() {
  return (
   <>
    <Box >
      <Text fontWeight={600} fontSize={"20px"} pt="30px" textAlign={["center","center","left","left","left"]} pl={["0rem","0rem","6rem","6rem","6rem"]}>Give Any Message</Text>
      <Divider border="1px solid gray"/>
      </Box>
<Box w="80%" margin="auto" bg="white" pb="50px">
    <Box w="80%" margin="auto">
        <Input  mt="20px" placeholder='Enter Name'/>
        <Input mt="10px" placeholder="Message Title"></Input>
        <Textarea  mt="10px" placeholder="Description"/>
    </Box>

</Box>
   </>

  )
}
