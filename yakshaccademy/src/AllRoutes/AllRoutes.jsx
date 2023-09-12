import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Login/Signup'
export default function AllRoutes() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Login/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
</Routes>



    </div>
  )
}
