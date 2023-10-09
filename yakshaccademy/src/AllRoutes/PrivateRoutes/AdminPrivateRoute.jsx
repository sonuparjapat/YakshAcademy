import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function AdminPrivateRoute({children}) {

    const adminlogindata=useSelector((state)=>state.loginreducer)
    const {token}=adminlogindata
    const location=useLocation()
 if(!token){
    return <Navigate to="/adminlogin" state={location.pathname} replace />
 }
 return children
}
