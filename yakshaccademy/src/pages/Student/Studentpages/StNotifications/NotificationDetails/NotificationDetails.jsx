import React, { useEffect } from 'react'
import { Divider,Box,Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getsinglenoti } from '../../../../../Redux/StudentSide/NotificationReducer/GetSignleNotification/Actions'
export default function NotificationDetails() {
  const {id}=useParams()
  const notidata=useSelector((state)=>state.getsinglenotireducer)
  const {notisLoading,notisError,noti}=notidata
  console.log(noti)
  const logindata=useSelector((state)=>state.loginreducer)
  const {token}=logindata
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getsinglenoti(token,id))
  },[])
  // console.log(id)
  return (
<>
<Box >
      <Text fontWeight={600} fontSize={"20px"} pt="30px" textAlign={["center","center","left","left","left"]} pl={["0rem","0rem","6rem","6rem","6rem"]}>
        Details</Text>
      </Box>
      <Divider border="1px solid gray"/>
</>
  )
}
