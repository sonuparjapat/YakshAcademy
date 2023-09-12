import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Login/Signup'
import Student from '../pages/Student/Student'
import Instructer from '../pages/Instructer/instructer'
import StudentPrivateRoute from './PrivateRoutes/StudentPrivateRoute'
import InstructerPrivateRoute from './PrivateRoutes/InstructerPrivateRoute'
import Assignments from '../pages/Student/Studentpages/Assignments'
import { useSelector } from 'react-redux'
import StudentRoutes from './StudentRoutes'
import StudentNavbar from '../pages/Student/studentComponents/Navbar'


export default function AllRoutes() {
  const data=useSelector((state)=>state.loginreducer)
  const {type}=data

  return (
    <div>
     {type&&type=="student"&&<StudentNavbar/>}
     
<Routes>
  <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
 

   <Route path="/student" element={<StudentPrivateRoute><Student/></StudentPrivateRoute>}></Route>
   <Route path="/student/assignments" element={<StudentPrivateRoute><Assignments/></StudentPrivateRoute>}></Route>

  
  
    <Route path="/instructer" element={<InstructerPrivateRoute><Instructer/></InstructerPrivateRoute>}></Route>
</Routes>



    </div>
  )
}
