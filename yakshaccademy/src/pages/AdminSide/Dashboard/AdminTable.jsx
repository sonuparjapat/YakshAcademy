import React, { useEffect, useState } from 'react'
import { Tfoot,Td,Tr,Th,TableContainer,Thead,Tbody,Table,TableCaption, Center, Text, Button, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete } from '@mui/icons-material'
import { deleteadmin, deleteadminfailure, deleteadminsucess } from '../../../Redux/Admin/DeleteAdmin/Action'
import { Toast } from 'bootstrap'
import { getadmindata } from '../../../Redux/Admin/GetAdminsData/Action'
import AlertComponent from './AlertComponent'
import AlertdeleteComponent from './AlertComponent'

export default function AdminTable() {
    const adminalldata=useSelector((state)=>state.adminloginreducer)
const [admindata,setAdmindata]=useState([])
const [forany,setForany]=useState(false)

const dispatch=useDispatch()
const deleteadmindata=useSelector((state)=>state.deleteadminreducer)
const {deleteadminisLoading,deleteadminisError}=deleteadmindata
const toast=useToast()
    const { studentscount,
      alldata,
      instructerscount,
      frontendinstructerscount,
      backendinstructerscount,
      fullstackinstructerscount,
      frontendstudentscount,
      backendstudentscount,
      fullstackstudentscount,
      students,
      instructer,
      frontendstudents,
      backendstudents,
      fullstackstudents,
      frontendinstructers,
      backendinstructers,
      adminscount,
      admins,
      admintoken,
      fullstackinstructers }=adminalldata
      const dataforadminside=useSelector((state)=>state.getadmindatareducer)
      const {alltypedata,admindataisLoading,adminddataisError}=dataforadminside
      const [status,setStatus]=useState(false)
      const [deletingitem,setDeleteingitem]=useState(null)
      // console.log(alltypedata)
      // console.log(dataforadminside)
      useEffect(()=>{

dispatch(getadmindata(admintoken,"admins"))
// setAdmindata(alltypedata)
      },[forany])
     
    //   console.log(admindata)
    const handledelete=(id)=>{
      setDeleteingitem(id)
      dispatch(deleteadmin(admintoken,id)).then((res)=>{
        dispatch(deleteadminsucess())
        toast({description:res.data.msg,position:"top",duration:"2000",status:"success"})
        setForany(!forany)
      }).catch((err)=>{
        dispatch(deleteadminfailure())
        toast({description:err.response.data.msg,position:"top",duration:"2000",status:"error"})
      })
    }
    if(admindataisLoading){
      return (
        <Center><h3>Loading...</h3></Center>
      )
    }else if(adminddataisError){
      return (
        <Center><h3>Something going wrong...</h3></Center>
      )
    }
  return (
    <>
    <TableContainer boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" w="100%"  >
  <Table variant='simple ' w="100%">
    <TableCaption><Center>All Registered Admins</Center></TableCaption>
    <Thead>
      <Tr>
        <Th>Sr.</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>UniqeId</Th>
        {admins.length>1&&<Th>Remove</Th>}
        {/* <Th>Email</Th> */}
      </Tr>
    </Thead>
    
    {alltypedata!=="undefined"&&alltypedata.length>=1?
    
alltypedata.map((admin,index)=>{
    return (
<Tbody>
      <Tr>
        <Td>{index+1}</Td>
        <Td>{admin.name}</Td>
        <Td >{admin.email}</Td>
        <Td>{admin.Id}</Td>
        {alltypedata.length>1&&<Td><Button onClick={()=>handledelete(admin._id)} _hover={{color:"red"}} >{deletingitem==admin._id?"Deleting..":<Delete  />}</Button></Td>}
      </Tr>
    
    </Tbody>
    )
}):
<Text>No Registered Admins</Text>}
    
  
  </Table>
</TableContainer>
   

    </>
  )
}
