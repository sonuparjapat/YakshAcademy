import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getnotifications } from '../../../../Redux/StudentSide/NotificationReducer/Action'
import { io } from 'socket.io-client'
import { mainapi } from '../../../../Redux/Api/mainapi'
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

socket.on("new-assignment",(notidata)=>{
  // console.log(notidata.assignment)
  setData(notidata.assignment)
  dispatch(getnotifications(token))

})
return ()=>{
  socket.close()
}
    },[])
  return (
    <div>StNotifications</div>
  )
}
