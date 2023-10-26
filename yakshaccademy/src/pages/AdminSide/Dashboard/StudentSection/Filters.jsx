
import React from 'react'
import { Input,Box,Button, FormLabel, InputGroup, Select, SelectField } from '@chakra-ui/react'
import styles from "./Filters.module.css"
export default function () {
  return (
    <div >
<Box className={styles.fadeIn} display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}  border="1px solid gray">

<Box p={2}><FormLabel>Search By Name:</FormLabel><InputGroup><Input placeholder='search' p={2}/></InputGroup> </Box>


<Box p={2}><FormLabel>Search By Email:</FormLabel><InputGroup><Input placeholder='search' p={2}/></InputGroup> </Box>
<Box p={2}><FormLabel>Search By UniqueId:</FormLabel><InputGroup><Input placeholder='search' p={2}/></InputGroup> </Box>
<Box p={2}><label>Search By Field:</label><Select p={2}>
   <option value="frontend">Frontend</option> 
   <option value="backend">Backend</option> 
   <option value="fullstack">Fullstack</option> 
    </Select> </Box>
<Box p={2}><label>Sort By Name:</label><Select p={2}>
   <option value="asc">Ascending Order</option> 
   <option value="desc">Descending Order</option> 
   
    </Select>
</Box>


</Box>


    </div>
  )
}
