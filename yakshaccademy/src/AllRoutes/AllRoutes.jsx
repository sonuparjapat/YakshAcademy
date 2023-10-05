import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Login/Signup'
import Student from '../pages/Student/Student'
import Instructer from '../pages/Instructer/instructer'
import StudentPrivateRoute from './PrivateRoutes/StudentPrivateRoute'
import InstructerPrivateRoute from './PrivateRoutes/InstructerPrivateRoute'

import { useSelector } from 'react-redux'

import StudentNavbar from '../pages/Student/studentComponents/Navbar'

import StudentProfile from '../pages/Student/Studentpages/StudentProfile'
import InstructerNavbar from '../pages/Instructer/InstructerComponents/InstructerNavbar'
import InstructerProfile from '../pages/Instructer/Instructerpages/InstructerProfile/InstructerProfile'
import InstructerAssignments from '../pages/Instructer/Instructerpages/InstructerAssignments/InstructerAssignments'
import InstructerCreateAssignments from '../pages/Instructer/Instructerpages/InstructerCreateAssignments/InstructerCreateAssignments'
import EditAssignment from '../pages/Instructer/EditAssignment/EditAssignment'
import Studentassignments from '../pages/Student/Studentpages/AllAssignments/Studentassignments'
import StudentSingleAssignment from '../pages/Student/Studentpages/SingleAssignment/SingleAssignment'
import StNotifications from '../pages/Student/Studentpages/StNotifications/StNotifications'
import NotificationDetails from '../pages/Student/Studentpages/StNotifications/NotificationDetails/NotificationDetails'
import InstructerCreateMessg from '../pages/Instructer/Instructerpages/CreateMessages/InstructerCreateMessg'


export default function AllRoutes() {
  const data=useSelector((state)=>state.loginreducer)
  const {type}=data
const location=useLocation()
  return (
    <div>
     {type&&type=="student"&&location.pathname!=="/login"&&location.pathname!=="/signup"&&location.pathname!=="/"&&<StudentNavbar/>}
     {type&&type=="instructer"&&location.pathname!=="/login"&&location.pathname!=="/signup"&&location.pathname!=="/"&&<InstructerNavbar/>}
     
<Routes>
  <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
 

   <Route path="/student" element={<StudentPrivateRoute><Student/></StudentPrivateRoute>}></Route>
<Route path="/notifications" element={<StudentPrivateRoute><StNotifications/></StudentPrivateRoute>}></Route>
   <Route path="/details/:id" element={<StudentPrivateRoute><StudentSingleAssignment/></StudentPrivateRoute>}></Route>
   <Route path="/profile" element={<StudentPrivateRoute><StudentProfile/></StudentPrivateRoute>}></Route>
<Route path="/notificationdetails/:id" element={<StudentPrivateRoute><NotificationDetails/></StudentPrivateRoute>}></Route>
  
  {/* InstructerRoutes */}
    <Route path="/instructer" element={<InstructerPrivateRoute><Instructer/></InstructerPrivateRoute>}></Route>
    <Route path="/instructerprofile" element={<InstructerPrivateRoute><InstructerProfile/></InstructerPrivateRoute>}></Route>
    <Route path="/instructerassignments" element={<InstructerPrivateRoute><Instructer/></InstructerPrivateRoute>}></Route>
    <Route path="/createassignments" element={<InstructerPrivateRoute><InstructerCreateAssignments/></InstructerPrivateRoute>}></Route>
    <Route path="/editassignment/:id" element={<InstructerPrivateRoute><EditAssignment/></InstructerPrivateRoute>}></Route>
    <Route path="" element={<InstructerPrivateRoute></InstructerPrivateRoute>}></Route>
    <Route path="/createMessages" element={<InstructerCreateMessg/>}></Route>
</Routes>



    </div>
  )
}
