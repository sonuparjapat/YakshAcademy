import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function StudentPrivateRoute({children}) {
    const data=useSelector((state)=>state.loginreducer)
    const {type,token}=data
const location=useLocation()
    if(!token&&!type){
return <Navigate to="/login" state={location.pathname} replace/>
    
    }else if(token&&type=="student"){
        return children
    }
 
}
