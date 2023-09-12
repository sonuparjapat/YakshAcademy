import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Login/Signup'
import Student from '../pages/Student/Student'
import Instructer from '../pages/Instructer/instructer'
import StudentPrivateRoute from './PrivateRoutes/StudentPrivateRoute'
import InstructerPrivateRoute from './PrivateRoutes/InstructerPrivateRoute'
import Assignments from '../pages/Student/Studentpages/Assignments'
import { useSelector } from 'react-redux'

import StudentNavbar from '../pages/Student/studentComponents/Navbar'

import StudentProfile from '../pages/Student/Studentpages/StudentProfile'


export default function AllRoutes() {
  const data=useSelector((state)=>state.loginreducer)
  const {type}=data
const location=useLocation()
  return (
    <div>
     {type&&type=="student"&&location.pathname!=="/login"&&location.pathname!=="/signup"&&location.pathname!=="/"&&<StudentNavbar/>}
     
<Routes>
  <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
 

   <Route path="/student" element={<StudentPrivateRoute><Student/></StudentPrivateRoute>}></Route>
   <Route path="/assignments" element={<StudentPrivateRoute><Assignments/></StudentPrivateRoute>}></Route>
   <Route path="/profile" element={<StudentPrivateRoute><StudentProfile/></StudentPrivateRoute>}></Route>

  
  
    <Route path="/instructer" element={<InstructerPrivateRoute><Instructer/></InstructerPrivateRoute>}></Route>
</Routes>



    </div>
  )
}
