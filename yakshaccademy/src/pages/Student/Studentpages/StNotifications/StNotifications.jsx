import React, { useEffect, useState } from 'react'

export default function StNotifications() {
    const [count,setCount]=useState(localStorage.getItem("count")||0)
    useEffect(()=>{
setCount(0)
localStorage.setItem("count",count)
    })
  return (
    <div>StNotifications</div>
  )
}
