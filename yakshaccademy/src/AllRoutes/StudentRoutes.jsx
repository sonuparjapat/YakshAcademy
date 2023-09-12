import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Student from '../pages/Student/Student'
import Assignments from '../pages/Student/Studentpages/Assignments'
import StudentNavbar from '../pages/Student/studentComponents/Navbar'
import StudentPrivateRoute from './PrivateRoutes/StudentPrivateRoute'
export default function StudentRoutes() {
  return (
    <>
    <StudentNavbar/>
    <Routes>
    <Route path="/student" element={<StudentPrivateRoute><Student/></StudentPrivateRoute>}></Route>
    <Route path="/student/assignments" element={<StudentPrivateRoute><Assignments/></StudentPrivateRoute>}></Route>
    </Routes>
    
    
    
    </>
  )
}
