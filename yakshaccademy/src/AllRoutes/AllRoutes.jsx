import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Login/Signup'
import Student from '../pages/Student/Student'
import Instructer from '../pages/Instructer/instructer'
import StudentPrivateRoute from './PrivateRoutes/StudentPrivateRoute'
import InstructerPrivateRoute from './PrivateRoutes/InstructerPrivateRoute'

export default function AllRoutes() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/student" element={<StudentPrivateRoute><Student/></StudentPrivateRoute>}></Route>
    <Route path="/instructer" element={<InstructerPrivateRoute><Instructer/></InstructerPrivateRoute>}></Route>
</Routes>



    </div>
  )
}
