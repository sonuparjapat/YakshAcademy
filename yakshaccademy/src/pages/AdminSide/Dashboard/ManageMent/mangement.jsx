import { Box, Button, Center, Heading } from '@chakra-ui/react'

import React from 'react'

export default function Mangement() {
  return (
    <div>
<Box mt="20px"><Center ><Heading color="green.300" fontSize={["15px","15px","17px","19px","20px"]}>~~Mange All From Here~~</Heading></Center></Box>
<Box bg="green.300" p={"30px"}>
    <Box display={"flex"} justifyContent={"space-evenly"}>
        <Button color="white" bg="blue.300" py={3} px={3}>ADD Student/Instructer</Button>
        <Button color="white" bg="blue.300" py={3} px={3}>All Students</Button>
        <Button color="white" bg="blue.300" py={3} px={3}>All Instucters</Button>
        <Button color="white" bg="blue.300" py={3} px={3}>ADD Student/Instructer</Button>
    </Box>
</Box>



    </div>
  )
}
